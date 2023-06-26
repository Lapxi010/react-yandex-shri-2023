import {AppDispatch} from '@/redux';

import {useDispatch} from 'react-redux';

export const useTypedDispatch = () => useDispatch<AppDispatch>()