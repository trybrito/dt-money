import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';
import { memo } from 'react';

/**
 * Por que um componente renderiza?
 *
 * - hooks changes (mudou estado, contexto, reducer);
 * - props changed (mudou propriedades);
 * - parent rendered (componente pai renderizou);
 *
 * Qual o fluxo de renderização?
 *
 * 1. O React recria o HTML do componente;
 * 2. Compara a versão recriada com a versão anterior;
 * 3. SE mudou alguma coisa, o componente é reescrito na tela;
 *
 * Memo: <- para HTMLs grandes e pesados
 * 0. Hooks changed ou props changed? (deep comparison); <- comparação mais onerosa
 * 0.1 Compara a versão atual dos hooks e props com a anterior;
 * 0.2 SE algo mudou, permiti a renderização do componente;
 */

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
