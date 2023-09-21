import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function addParam(key: string, value: string) {
    // if param already exists edit the params
    if (searchParams.has(key)) {
      editParam(key, value);
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.append(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function editParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function removeParam(key: string) {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function getParam(key: string) {
    return searchParams.get(key);
  }

  return { addParam, editParam, removeParam, getParam };
}

export default useQueryParams;
