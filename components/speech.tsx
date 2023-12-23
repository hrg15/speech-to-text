// @ts-nocheck
"use client";
import React from "react";
import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic } from "lucide-react";

const Speech = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (typeof window !== "undefined" && !browserSupportsSpeechRecognition) {
    return (
      <div>
        <p>Browser doesn't support speech recognition.</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <div className="py-4 flex items-center gap-2 border-b border-zinc-300">
        <p className="font-bold">Record:</p>
        <span class="relative flex h-3 w-3">
          {listening && (
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          )}
          <span
            class={`relative inline-flex rounded-full h-3 w-3 ${
              listening ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </span>
      </div>
      <div className="pt-4">
        <p>{transcript}</p>
      </div>
      <div className="fixed bottom-2 inset-0 flex items-end justify-center">
        <button
          className="m-4 rounded-full h-12 w-12 flex items-center justify-center bg-zinc-200 "
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          <div className="select-none">
            <Mic
              className={`w-7 h-7 text-zinc-700 ${
                listening ? "text-zinc-950" : null
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Speech;
