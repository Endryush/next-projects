import { useContext } from "react";
import AppContext from '../context/ThemeContext'

const useThemeData = () => useContext(AppContext)

export default useThemeData