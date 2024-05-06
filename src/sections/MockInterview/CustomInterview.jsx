import React, { useState, useEffect } from "react";
import "../../style/selectedInterview.css";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/icons";
import { CheckBox, ButtonVariant7, InputField1, Selector } from "../../components";

const CustomInterview = ({ radioHandler, customHandler }) => {
  const [JobData, setJobData] = useState({
    title: "",
    description: "tahir",
  });

  const [jobError, setJobError] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate("interview-info");
  };

  return (
    <div class="relative laptopSm:max-w-[600px] mx-auto w-full  laptopSm:min-h-screen sm:pb-10 flex flex-col">
      <div>
        <button
          class="flex items-baseline gap-2 font-sofia cursor-pointer w-fit text-[#312A50] text-base"
          onClick={() => {
            radioHandler(null);
            customHandler(false);
          }}
        >
          <BackArrowIcon />
          <p>Back</p>
        </button>
        <div class="flex flex-col justify-start items-start gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-[#312a50] text-left pb-8 pt-2">
            Practice giving live, conversational interviews for free.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div class=" w-full mx-auto pl-2 pr-3 pb-4">
            <div class="mb-4">
              <InputField1
                label={"Job title"}
                placeholder={"e.g. “Senior Software Developer”"}
                name={"title"}
                value={JobData.title}
                handler={handleChange}
                errorMessage={jobError.title}
              />
            </div>
            <div class="mb-4">
              <label
                class="text-sm text-[#312A50] leading-[134%] font-semibold mb-0 flex flex-col"
                data-state="closed"
              >
                <span class="mb-1 leading-[150%]">Job description</span>
              </label>
              <div>
                <div class="RichTextEditor__root___2QXK- !bg-white !text-[#312A50]">
                  <div class="EditorToolbar__root___3_Aqz flex gap-4 justify-center h-12">
                    <div class="ButtonGroup__root___3lEAn">
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="Bold"
                          role="switch"
                          aria-checked="false"
                          class="custom-css-class custom-border-rte custom-gap IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-bold___2zl9t IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="Italic"
                          role="switch"
                          aria-checked="false"
                          class="custom-gap custom-border-rte IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-italic___2hHzc IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="Strikethrough"
                          role="switch"
                          aria-checked="false"
                          class="custom-gap custom-border-rte IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-strikethrough___QtE2X IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="Underline"
                          role="switch"
                          aria-checked="false"
                          class="custom-border-rte IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-underline___2EmZJ IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                    </div>
                    <div class="ButtonGroup__root___3lEAn">
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="UL"
                          role="switch"
                          aria-checked="false"
                          class="custom-border-rte custom-gap IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-unordered-list-item___Pvkrr IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                      <div class="ButtonWrap__root___1EO_R">
                        <button
                          type="button"
                          title="OL"
                          role="switch"
                          aria-checked="false"
                          class="custom-border-rte IconButton__root___3tqZW Button__root___1gz0c"
                        >
                          <span class="IconButton__icon-ordered-list-item___2rzD0 IconButton__icon___3YgOS"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="RichTextEditor__editor___1QqIU h-[200px] bg-white mx-[26px] my-2 text-[#312A50] font-sofia text-[#4D526D] !text-xs !bg-transparent !p-0 !text-base !text-[#312A50]">
                    <div class="DraftEditor-root">
                      <div class="DraftEditor-editorContainer">
                        <div
                          aria-label="Edit text"
                          class="notranslate public-DraftEditor-content draft-container"
                          contenteditable="true"
                          role="textbox"
                          spellcheck="true"
                        >
                          <div data-contents="true">
                            <div
                              class="RichTextEditor__block___2Vs_D RichTextEditor__paragraph___3NTf9"
                              data-block="true"
                              data-editor="7qj9v"
                              data-offset-key="drm3i-0-0"
                            >
                              <div
                                data-offset-key="drm3i-0-0"
                                class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                              >
                                <span data-offset-key="drm3i-0-0">
                                  <span data-text="true"></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Selector
              label={"Interview duration (mins)"}
            />
            <CheckBox
              name={"allow_data_share"}
              label={"Match me with opportunities"}
              isDescription={true}
            />
          </div>
          <div class="flex flex-col justify-start items-center pb-8 gap-4 sm:flex-row">
            <ButtonVariant7 handler={handleSubmit}>Submit</ButtonVariant7>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInterview;
