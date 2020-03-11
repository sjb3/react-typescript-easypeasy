import { createTypedHooks } from 'easy-peasy'; // 👈import the helper
import Store from '../interfaces/Store'; // 👈 import our model type

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<Store>();

// 👇 export the typed hooks
export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
