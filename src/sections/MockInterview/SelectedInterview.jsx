import React, { useState } from "react";
import '../../style/selectedInterview.css';
import { BackArrowIcon } from "../../assets/icons";
import { RadioGroup } from "../../components";
import { MockInterviewData } from "../../Content";

const SelectedInterview = ({selected, handler}) => {

  return (
    <div class="relative laptopSm:max-w-[600px] mx-auto w-full  laptopSm:min-h-screen sm:pb-10 flex flex-col">
      <div>
        <button 
          class="flex items-baseline gap-2 font-sofia cursor-pointer w-fit text-[#312A50] text-base"
          onClick={() => handler(null)}
        >
          <BackArrowIcon />
          <p>Back</p>
        </button>
        <div class="flex flex-col justify-start items-start gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-[#312a50] text-left pb-8 pt-2">
            Practice giving live, conversational interviews for free.
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#6b6581]/70">
            Select from these options and get your pre-made Job description and
            practice your quick interview. Or fill your JD manually
          </p>
        </div>
      </div>
      <div>
        <form data-hs-cf-bound="true" data-gtm-form-interact-id="0">
          <div>
            <div class="flex flex-col flex-grow mb-6">
              <RadioGroup selected={selected} handler={handler} data={MockInterviewData}/>
            </div>
            <div class=" w-full mx-auto pl-2 pr-3 pb-4">
              <div class="mb-4">
                <label
                  class="text-sm text-[#312A50] leading-[134%] font-semibold mb-0 flex flex-col"
                  data-state="closed"
                >
                  <span class="mb-1 leading-[150%]">Job description</span>
                </label>
                <div>
                  <div class="RichTextEditor__root___2QXK- !bg-[#656565]/10">
                    <div class="RichTextEditor__editor___1QqIU h-[200px] bg-white mx-[26px] my-2 text-[#312A50] font-sofia !text-xs !bg-transparent !p-0 !text-[#6B6581]/70">
                      <div class="DraftEditor-root">
                        <div class="DraftEditor-editorContainer">
                          <div
                            aria-label="Edit text"
                            class="public-DraftEditor-content"
                            contenteditable="false"
                            spellcheck="true"
                          >
                            <div data-contents="true">
                              <div
                                class="RichTextEditor__block___2Vs_D RichTextEditor__paragraph___3NTf9"
                                data-block="true"
                                data-editor="85qi3"
                                data-offset-key="57cv6-0-0"
                              >
                                <div
                                  data-offset-key="57cv6-0-0"
                                  class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                                >
                                  <span data-offset-key="57cv6-0-0">
                                    <span data-text="true">
                                      We are looking for a Full Stack Developer
                                      to produce scalable software solutions.
                                      You’ll be part of a cross-functional team
                                      that’s responsible for the full software
                                      development life cycle, from conception to
                                      deployment. As a Full Stack Developer, you
                                      should be comfortable around both
                                      front-end and back-end coding languages,
                                      development frameworks and third-party
                                      libraries. You should also be a team
                                      player with a knack for visual design and
                                      utility. If you’re also familiar with
                                      Agile methodologies, we’d like to meet
                                      you. Responsibilities: Work with
                                      development teams and product managers to
                                      ideate software solutions Design
                                      client-side and server-side architecture
                                      Build the front-end of applications
                                      through appealing visual design Develop
                                      and manage well-functioning databases and
                                      applications Write effective APIs Test
                                      software to ensure responsiveness and
                                      efficiency Troubleshoot, debug and upgrade
                                      software Create security and data
                                      protection settings Build features and
                                      applications with a mobile responsive
                                      design Write technical documentation Work
                                      with data scientists and analysts to
                                      improve software Requirements and skills
                                      Proven experience as a Full Stack
                                      Developer or similar role Experience
                                      developing desktop and mobile applications
                                      Familiarity with common stacks Knowledge
                                      of multiple front-end languages and
                                      libraries (e.g. HTML/ CSS, JavaScript,
                                      XML, jQuery) Knowledge of multiple
                                      back-end languages (e.g. C#, Java, Python)
                                      and JavaScript frameworks (e.g. Angular,
                                      React, Node.js) Familiarity with databases
                                      (e.g. MySQL, MongoDB), web servers (e.g.
                                      Apache) and UI/UX design Excellent
                                      communication and teamwork skills Great
                                      attention to detail Organizational skills
                                      An analytical mind
                                    </span>
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
              <div class="text-lg text-[#312A50] leading-[134%] font-semibold mb-0">
                <div class="w-fit text-sm" data-state="closed">
                  Interview duration (mins)
                </div>
              </div>
              <div>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r5:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  disabled=""
                  data-disabled=""
                  class="w-full rounded-[3px] border border-[#65656533] py-2 outline-none focus:outline-none focus:border placeholder-[#4D526D] flex items-center justify-between select-trigger-btn h-[56px] bg-[#656565]/10 text-[#6B6581]/70 mt-[10px] px-[26px]"
                >
                  <span className="pointer-events-none">
                    <span class="whitespace-nowrap overflow-hidden overflow-ellipsis block">
                      10
                    </span>
                  </span>
                  <div class="w-3 h-3 flex items-center justify-end flex-shrink-0 select_icon rotate-[270deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        fill="#667085"
                        fill-rule="evenodd"
                        d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <select
                aria-hidden="true"
                tabindex="-1"
                name="interview_duration"
                className="selector-design"
                data-gtm-form-interact-field-id="0"
              >
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <div class="mb-4"></div>
              <div class="relative mt-4 text-sm text-[#5C5C5C] font-thin">
                <div class="relative">
                  <button
                    type="button"
                    class="absolute -left-5 top-[2px]"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      fill="none"
                      viewBox="0 0 19 17"
                      class="w-4 h-4"
                    >
                      <path
                        fill="#7B61FF"
                        d="M9.529 15.791c-.48 0-.953-.145-1.326-.437l-1.204-.938c-.122-.097-.427-.194-.587-.194H5.078c-1.127 0-2.042-.833-2.042-1.861v-1.188c0-.145-.107-.423-.206-.527L1.794 9.534a1.783 1.783 0 0 1 0-2.41l1.036-1.11c.1-.104.206-.382.206-.528v-1.18c0-1.028.915-1.862 2.042-1.862h1.319c.16 0 .457-.104.587-.201l1.204-.938c.747-.576 1.913-.576 2.66 0l1.204.938c.122.097.434.194.594.194h1.295c1.128 0 2.043.834 2.043 1.861V5.48c0 .146.114.417.22.535l1.03 1.097c.64.687.632 1.75 0 2.423l-1.03 1.098a1.03 1.03 0 0 0-.213.534v1.181c0 1.028-.914 1.861-2.042 1.861h-1.295c-.16 0-.458.104-.595.201l-1.204.938a2.132 2.132 0 0 1-1.326.444ZM5.079 3.486c-.496 0-.9.368-.9.82v1.18c0 .396-.198.896-.48 1.201L2.663 7.798c-.26.285-.26.785 0 1.063L3.69 9.965c.275.285.48.806.48 1.201v1.188c0 .451.404.82.9.82h1.326c.427 0 .99.187 1.326.444l1.212.944c.312.243.86.243 1.173 0l1.204-.937c.343-.264.9-.445 1.326-.445h1.296c.495 0 .9-.368.9-.82v-1.18c0-.389.205-.896.487-1.208l1.036-1.104a.815.815 0 0 0 0-1.07L15.33 6.701c-.29-.312-.488-.82-.488-1.208V4.305c0-.451-.404-.82-.9-.82h-1.295c-.434 0-.998-.187-1.334-.444l-1.211-.944c-.313-.243-.854-.243-1.174 0l-1.196.944c-.343.257-.9.445-1.334.445H5.078Z"
                      ></path>
                      <path
                        fill="#292D32"
                        d="M9.521 11.715c-.419 0-.762-.312-.762-.694 0-.382.336-.695.762-.695.42 0 .762.313.762.695 0 .382-.335.694-.762.694ZM9.521 9.528c-.312 0-.571-.236-.571-.521V5.646c0-.285.259-.521.571-.521.313 0 .572.236.572.52V9c0 .292-.252.528-.572.528Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <label class="flex items-center">
                  <input
                    class="mr-3"
                    type="checkbox"
                    name="allow_data_share"
                    placeholder="Enter Email"
                  />
                  <p>Match me with opportunities</p>
                </label>
              </div>
            </div>
            <div class="flex flex-col justify-start items-center pb-8 gap-4 sm:flex-row">
              <button
                id="mock-submit-interview"
                type="submit"
                class="flex sm:w-auto w-full min-h-[50px] items-center justify-center rounded-lg bg-[#7A3FF3] p-2 text-center text-sm text-[#ffffff] hover:bg-violet-700 focus:bg-violet-700 disabled:bg-slate-400 mobileSm:min-w-[193px]"
              >
                Submit
              </button>
              <button
                id="mock-start-customisation-step2"
                class="w-full mobileSm:min-w-[193px] border flex-1 min-h-[50px] items-center justify-center rounded-lg bg-transparent p-2 text-center text-sm text-[#312A50]"
                type="reset"
              >
                Create my custom interview
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectedInterview;
