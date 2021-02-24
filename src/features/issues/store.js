import {configureStore } from '@reduxjs/toolkit'
import Reducer from "../issues/IssueSlice"

export default configureStore({
    reducer:Reducer
})