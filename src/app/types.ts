
export type LearningPathType = {
    addq: any 
    lectureNumber : string,
    lectureTitle : string,
    lectureWebsite : string
    _id: string,
}


export type ExamType = { 
    _id : string,
    question : string,
    choice : string[]
    ans: string[],
}

export type OutlineType = {
    _id: string;
    question: string;
    answer: string;
    modelId: string;
    requirement: string;
    lectureDetails: LearningPathType[]; 
}


export type LearningPathPreviewType = {
    _id: any 
    lectureNumber : string,
    lectureTitle : string,
    lectureWebsite : string
    quiz: QuizType[],
}

 
export type QuizType = {
    _id: number
    num : string,
    question_text :string,
    options : Array<{ ans: string; isCorrect: boolean }>
}
export type PreviewType = {
        _id : string,
        question :string
        description : string
        requirement : string
        lectureDetails :LearningPathPreviewType[]
        examination : QuizType[]
}