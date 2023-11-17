"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GenerateQuizfunc } from "../../../../func/Generate";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
type Props = {
  lecture: string;
  question: string;
  pathname: string;
};

export default function Coursecompo({ lecture, question, pathname }: Props) {
  const router = useRouter();
  const [isGenerate, setIsgenerate] = useState<boolean>(false);
  const [quizNumber, setQuizNumber] = useState<any>([
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
  ]);
  const addQuiz = useCallback(() => {
    const newQuiz = quizNumber;
    newQuiz.push({ num: quizNumber.length + 1 });
    sessionStorage?.setItem(
      "quizNumber" + question + lecture,
      JSON.stringify(quizNumber)
    );
    router.refresh();
  }, [quizNumber]);

  const GENERATE = async()=>{
    setIsgenerate(true)
    const res = await GenerateQuizfunc(question);
    // for test
    if (res.lecture_id) {
      setIsgenerate(false);
      sessionStorage?.setItem(
        "quizNumber" + question + lecture,
        JSON.stringify(res.questions)
      );
      setQuizNumber(res.questions);
      router.refresh();
      toast.success('Saved')
      return;
    }
    setIsgenerate(false);
    toast.error("Try again");

  }

  const GenerateQuiz = async () => {
    const session_old = sessionStorage.getItem(
      "quizNumber" + question + lecture
    );
    if (session_old) {
      toast(() => (
        <div className="flex items-center justify-center flex-col gap-y-[1.4em]">
          <h6 className="text-[1.2rem]">Generate Again ? </h6>
          <span className="flex justify-end self-end gap-x-2">
            <button
              onClick={() => 
                {
                    toast.dismiss()
                    GENERATE()
                }
            
            }
              className=" bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Sure
            </button>
            <button
              onClick={() => {
                toast.dismiss()
                return
            }}
              className="border px-3 py-1 rounded-lg "
            >
              Close
            </button>
          </span>
        </div>
      ));
      return;
    }else{
        GENERATE()
    }
  };

  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem(
        "quizNumber" + question + lecture
      );
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setQuizNumber(parsedData);

          console.log(parsedData);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.log("No data found in sessionStorage.");
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  const updateQuestion = useCallback(
    (
      questionValue: string,
      choiceValue: string,
      questionIndex: number,
      choiceIndex: number,
      isCorrect: boolean
    ) => {
      const update = {
        num: questionIndex,
        question_text:
          questionValue || quizNumber[questionIndex]?.question_text || "",
        options: [
          {
            ans:
              quizNumber[questionIndex]?.options === undefined
                ? ""
                : quizNumber[questionIndex]?.options[0]?.ans,
            isCorrect: false,
          },
          {
            ans:
              quizNumber[questionIndex]?.options === undefined
                ? ""
                : quizNumber[questionIndex]?.options[1]?.ans,
            isCorrect: false,
          },
          {
            ans:
              quizNumber[questionIndex]?.options === undefined
                ? ""
                : quizNumber[questionIndex]?.options[2]?.ans,
            isCorrect: false,
          },
          {
            ans:
              quizNumber[questionIndex]?.options === undefined
                ? ""
                : quizNumber[questionIndex]?.options[3]?.ans,
            isCorrect: false,
          },
        ],
      };
      update.options[choiceIndex] = { ans: choiceValue, isCorrect: isCorrect };
      quizNumber[questionIndex] = update;
      sessionStorage.setItem(
        "quizNumber" + question + lecture,
        JSON.stringify(quizNumber)
      );
    },
    []
  );

  function QuizAdd({
    children,
    indexs,
    data,
  }: {
    children: React.ReactNode;
    indexs: number;
    data: any;
  }) {
    return (
      <div className="px-[40px] border-[#E9EAF0]">
        <BoxQuiz>
          <HeadQuiz deleteid={indexs} data={data}>
            {" "}
            {children}
          </HeadQuiz>
          <QuizAddContent>
            {[0, 1, 2, 3].map((index: number) => (
              <InputQuiz
                data={data}
                indexChoice={index}
                value={false}
                key={`${indexs}${index}`}
                nameRadio={indexs}
                idInput={`${indexs}${index}`}
                placeHolderInput={"Choice 0" + (index + 1)}
                nameInput={"input" + (indexs + 1)}
              />
            ))}
          </QuizAddContent>
        </BoxQuiz>
      </div>
    );
  }

  function InputQuiz({
    data,
    nameRadio,
    idInput,
    placeHolderInput,
    nameInput,
    value,
    indexChoice,
  }: {
    indexChoice: number;
    nameRadio: any;
    idInput: any;
    placeHolderInput: any;
    nameInput: any;
    value: any;
    data: any;
  }) {
    return (
      <div className="flex items-center gap-x-3 ">
        <label htmlFor={idInput} className="radio_label ">
          <input
            type="radio"
            id={idInput}
            defaultChecked={data?.options?.[indexChoice]?.isCorrect ? true :  false}
            className="radio"
            name={nameRadio}
            value={String(value + 1)}
            onChange={() =>
              updateQuestion("", "", nameRadio, indexChoice, true)
            }
          />
          <span className="checker"></span>
        </label>
        <input
          defaultValue={
            data.options === undefined ? "" : data.options[indexChoice]?.ans
          }
          type="text"
          className="border rounded-[12px] w-full px-3 py-2  focus:border-orange-300 focus:border-[1px] focus:outline-none"
          placeholder={placeHolderInput}
          name={nameInput}
          onChange={(e) =>
            updateQuestion("", e.target.value, nameRadio, indexChoice, false)
          }
        />
      </div>
    );
  }

  function BoxQuiz({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col justify-center mt-11 border-[#E9EAF0]">
        {children}
      </div>
    );
  }

  function HeadQuiz({
    children,
    deleteid,
    data,
  }: {
    children: React.ReactNode;
    deleteid: number;
    data: any;
  }) {
    const DeleteQuiz = (deleteid: number) => {
      const deleteQuiz: number[] = quizNumber;
      deleteQuiz.splice(deleteid, 1);
      setQuizNumber(deleteQuiz);
      sessionStorage.setItem(
        "quizNumber" + question + lecture,
        JSON.stringify(deleteQuiz)
      );
      router.refresh();
    };
    return (
      <div className="flex w-full justify-between ">
        <div className="flex gap-x-2">
          <h3 className="text-[#2F327D]"> {children}:</h3>
          <input
            type="text"
            className=" px-2 w-[30rem]"
            placeholder="Question"
            onChange={(e) =>
              updateQuestion(e.target.value, "", deleteid, 0, false)
            }
            defaultValue={data.question_text || ""}
          />
        </div>
        <div className="flex gap-x-4  ">
          <Image
            className="cursor-pointer duration-75 hover:animate-spin"
            alt="gen"
            width={24}
            height={24}
            src={"/Synchronize.svg"}
          />
          <Image
            className="cursor-pointer duration-200 hover:scale-110"
            onClick={() => DeleteQuiz(deleteid)}
            alt="pencil"
            width={24}
            height={24}
            src={"/Trash.svg"}
          />
        </div>
      </div>
    );
  }

  function QuizAddContent({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col gap-y-3 justify-center mt-5">
        {children}
      </div>
    );
  }
  return (
    <div className={`flex flex-col max-h-[5000px]   `}>
      <div
        className={` duration-200 px-6 border-[#E9EAF0] border-[0.5px] bg-[#FFFFFF] max-h-[4000px] py-5 rounded-[14px]`}
      >
        <div
          className={` rounded-t-[14px] flex justify-between items-center gap-x-10 px-5 h-[62px] w-full h-f `}
        >
          <p className=""> {pathname === "/exam" ? "Examination" : lecture}</p>
          <button
            className={`w-[147px] h-[37px] px-4 py-1 flex items-center gap-x-1   border border-[#F48C06] text-[#F48C06] rounded-[14px]`}
            disabled={isGenerate}
            type="button"
            onClick={GenerateQuiz}
          >
            {" "}
            Generate all{" "}
            {isGenerate ? (
              <AiOutlineLoading3Quarters className={`animate-spin`} />
            ) : null}
          </button>
        </div>
        {quizNumber &&
          quizNumber?.map((data: any, index: number) => {
            return (
              <QuizAdd indexs={index} data={data} key={index}>
                {" "}
                Question {quizNumber.length > 9
                  ? index + 1
                  : "0" + (index + 1)}{" "}
              </QuizAdd>
            );
          })}
        <button
          type="button"
          className="mt-9 w-full bg-addquiz h-[48px] rounded-[14px] text-[#F48C06] "
          onClick={addQuiz}
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
}
