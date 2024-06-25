import { useSelector } from 'react-redux'
import { RootState } from '../features/store'

export const useAppSelector = useSelector.withTypes<RootState>()