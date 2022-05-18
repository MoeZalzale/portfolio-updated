import {createSlice} from '@reduxjs/toolkit'
import { animationControls, AnimationControls, useAnimation} from 'framer-motion'
import {useEffect} from 'react'

    

export const animationSlice = createSlice({

name:'animations',
initialState : {
value :  false
},
reducers:{

done: (state) =>{

    state.value = true
}


}

})

export const {done} = animationSlice.actions
export default animationSlice.reducer