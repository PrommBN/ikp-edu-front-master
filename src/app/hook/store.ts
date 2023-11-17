import { create } from 'zustand';

type StoreResult = {
  resultStore : number
  setResultStore : (data : any) => void
  numberofQuizStore: number
  setNumberofQuizStore : ()=> void
  setNumberofQuizPrevStore : ()=> void
  amoutoflecture : number[]
  setaddlecture : () => void



}




export const useResult = create<StoreResult>((set) => ({
  resultStore: 0,
  amoutoflecture : [1,2,3,4,5,6,7,8],
  setResultStore: (data) => {
    set({ resultStore: data });
  },
  numberofQuizStore: 1,
  setNumberofQuizStore: () => {
    set((state) => ({ numberofQuizStore: state.numberofQuizStore + 1 }));
  },
  setNumberofQuizPrevStore : ()=>{
      set((state)=> ({ numberofQuizStore : state.numberofQuizStore-1}));
  },
  setaddlecture : () => { 
      set((state)=> {
          const newlecture = state.amoutoflecture
          newlecture.push(state.amoutoflecture.length+1)
          return { amoutoflecture : newlecture}
      })
  }

}));
