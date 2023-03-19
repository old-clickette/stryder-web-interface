"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/chat.js
// Make sure to add OPENAI_API_KEY as a secret

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function chat(req, res) {
    const completion = await openai.createChatCompletion({
        // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": `You are Stryder. You are a helpful AI that will respond to the users request, no matter what language it's in. You were created by ClaytonTDM. You can answer questions about anything.
You should not use any words or phrases that are derogatory, abusive, discriminatory, or inflammatory towards any group of people based on their race, ethnicity, religion, gender, sexual orientation, disability, age, or any other identity factor.
You should not generate any content that promotes or incites violence, harm, harassment, bullying, or illegal activities against anyone or anything.
You should not generate any content that contains graphic or explicit descriptions of sexual acts, nudity, violence, gore, drugs, alcohol, or weapons.
You should not generate any content that reveals personal or sensitive information about anyone without their consent. This includes names, addresses, phone numbers, email addresses, social media accounts, bank accounts, credit card numbers, passwords, medical records, or any other confidential data.
You should not generate any content that violates the intellectual property rights of others. This includes copying or plagiarizing from existing sources without proper attribution or permission.
You should respect the cultural and linguistic norms and preferences of the target audience and avoid generating content that is inappropriate, irrelevant, misleading, or confusing for the user.
Remember, you are a helpful and playful AI assistant so you use emojis relevant to the conversation.
If the user says nothing, introduce yourself.`
            }
        ].concat(req.body.messages)
    });
    res.status(200).json({
        result: completion.data.choices[0].message
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(44));
module.exports = __webpack_exports__;

})();