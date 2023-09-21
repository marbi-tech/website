import clsx, { ClassValue } from 'clsx';
import tailwindConfig from '../../tailwind.config';
import { extendTailwindMerge } from 'tailwind-merge';

// merge classes from  tailwind
const twMerge = extendTailwindMerge({
  classGroups: {
    // Ensures that the fontSize custom class group is merged correctly
    // Ref: https://github.com/dcastil/tailwind-merge/issues/97
    'font-size': [{ text: Object.keys(tailwindConfig.theme?.fontSize || []) }],
  },
});

/** Merge classes with tailwind-merge with clsx full feature */
function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export default clsxm;
