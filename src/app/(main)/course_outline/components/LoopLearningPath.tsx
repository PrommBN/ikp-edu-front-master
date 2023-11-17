'use client'
import React, { useEffect, useState } from 'react';
import LearningPath from './LearningPath';
import { v4 as uuidv4 } from 'uuid';
import { useResult } from '@/app/hook/store';
import {  LearningPathType, OutlineType } from '@/app/types';
type Props = {
    id: string;
    title: string
    datafetch: OutlineType
}

export default function LoopLearningPath({ id, title, datafetch }: Props) {
    const { amoutoflecture } = useResult();
    const [lecture, setLecture] = useState<any>([])
    useEffect(() => {
        const sessionData = sessionStorage.getItem('lecture' + id) || true
        if (sessionData) {
            sessionStorage.setItem('lecture' + id, JSON.stringify(datafetch));
            setLecture(datafetch||'')
        } else {
            setLecture(sessionData)
        }
    }, [lecture])
    return (
        <>
            {lecture?.lectureDetails?.map((data: LearningPathType , index : number) => (
                <LearningPath key={uuidv4()} index={index+1} data={data} authors={id as string} title={title} />
            ))
            }
        </>
    );

}




