/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8858:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/javascript/context/language/language.js

const LanguageContext = /*#__PURE__*/(0,react.createContext)(null);
/* harmony default export */ var language_language = (LanguageContext);
;// CONCATENATED MODULE: ./src/javascript/context/index.js
 // eslint-disable-next-line import/prefer-default-export


;// CONCATENATED MODULE: ./src/javascript/components/header/information/title.js


/**
 * @component Title - Show a greeting and user name
 * */

const Title = () => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "main-heading pe-2"
  }, language === 'ru' ? 'Менеджер задач' : 'Task manager', /*#__PURE__*/react.createElement("i", {
    className: "bi bi-journals ps-1 d-none d-sm-inline"
  }, " ")), /*#__PURE__*/react.createElement("span", {
    className: "main-heading-user d-block pe-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "pr-2"
  }, ' ', language === 'ru' ? 'Добро пожаловать на сайт' : 'Welcome to site', ' ')));
};

/* harmony default export */ var title = (Title);
;// CONCATENATED MODULE: ./src/javascript/components/header/information/index.js


;// CONCATENATED MODULE: ./src/javascript/components/header/interfaces/change-theme.js


/**
 * @component ChangeTheme - Change theme on site
 * */

const ChangeTheme = ({
  onChangeTheme,
  theme
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("div", {
    className: "[ col-12 col-md-4 ] mb-2"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "change-theme",
    className: "form-label label-heading"
  }, language === 'ru' ? 'Смена темы' : 'Change theme'), /*#__PURE__*/react.createElement("select", {
    onChange: onChangeTheme,
    value: theme,
    id: "change-theme",
    className: "form-select"
  }, /*#__PURE__*/react.createElement("option", {
    value: "light"
  }, language === 'ru' ? 'Светлая тема' : 'Light theme'), /*#__PURE__*/react.createElement("option", {
    value: "dark"
  }, language === 'ru' ? 'Темная тема' : 'Dark theme'), /*#__PURE__*/react.createElement("option", {
    value: "neon"
  }, language === 'ru' ? 'Неоновая тема' : 'Neon theme'), /*#__PURE__*/react.createElement("option", {
    value: "gold"
  }, language === 'ru' ? 'Золотая тема' : 'Gold theme'), /*#__PURE__*/react.createElement("option", {
    value: "emerald"
  }, language === 'ru' ? 'Изумрудная тема' : 'Emerald theme')));
};

/* harmony default export */ var change_theme = (ChangeTheme);
;// CONCATENATED MODULE: ./src/javascript/components/header/interfaces/change-language.js


/**
 * @component ChangeLanguage - Change language on site
 * */

const ChangeLanguage = ({
  setLanguage
}) => {
  const changeLanguage = value => {
    localStorage.setItem('language', value);
    setLanguage(value);
  };

  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("div", {
    className: "[ col-12 col-md-4 ] mb-2"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "change-language",
    className: "form-label label-heading"
  }, language === 'ru' ? 'Смена языка' : 'Change language'), /*#__PURE__*/react.createElement("select", {
    onChange: ({
      target: {
        value
      }
    }) => changeLanguage(value),
    defaultValue: language === 'ru' ? 'ru' : 'en',
    id: "change-language",
    className: "form-select"
  }, /*#__PURE__*/react.createElement("option", {
    value: "ru"
  }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"), /*#__PURE__*/react.createElement("option", {
    value: "en"
  }, "English")));
};

/* harmony default export */ var change_language = (ChangeLanguage);
;// CONCATENATED MODULE: ./src/javascript/components/header/interfaces/index.js



;// CONCATENATED MODULE: ./src/javascript/components/header/modal/modal.js

/**
 * @component Modal - Modal window for authentication or registration
 * */

const Modal = ({
  theme
}) => /*#__PURE__*/react.createElement("section", {
  className: "modal text-body",
  tabIndex: "-1"
}, /*#__PURE__*/react.createElement("section", {
  className: "modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down"
}, /*#__PURE__*/react.createElement("section", {
  className: `${theme === 'dark' ? 'modal-content bg-dark text-light' : 'modal-content'}`
}, /*#__PURE__*/react.createElement("header", {
  className: "modal-header"
}, /*#__PURE__*/react.createElement("h5", {
  className: "modal-title"
}, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"), /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: `${theme === 'dark' ? 'btn-close btn-close-white' : 'btn-close'}`,
  "data-bs-dismiss": "modal",
  "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E"
}, ' ')), /*#__PURE__*/react.createElement("article", {
  className: "modal-body"
}, /*#__PURE__*/react.createElement("p", null, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u0437\u0430\u0434\u0430\u0447, \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447, \u0434\u0435\u0434\u043B\u0430\u0439\u043D \u0434\u043B\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u0434\u0430\u0447, \u0434\u043E\u0441\u0442\u0443\u043F \u0441 \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0442\u0435\u043C\u044B \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!"), /*#__PURE__*/react.createElement("p", null, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C \u0431\u0435\u0437 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043D\u043E \u0432 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0437\u0430\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F \u0432\u0430\u0441"), /*#__PURE__*/react.createElement("p", null, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E!"), /*#__PURE__*/react.createElement("p", null, "\u042D\u0442\u043E \u0437\u0430\u0439\u043C\u0435\u0442 \u043F\u0430\u0440\u0443 \u043C\u0438\u043D\u0443\u0442...")), /*#__PURE__*/react.createElement("footer", {
  className: "modal-footer"
}, /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: "btn btn-primary",
  "data-bs-dismiss": "modal",
  "data-modal": "continue"
}, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"), /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: "btn btn-secondary",
  "data-bs-dismiss": "modal",
  "data-modal": "close"
}, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));

/* harmony default export */ var modal = (Modal);
;// CONCATENATED MODULE: ./src/javascript/components/header/modal/modal-entry.js

/**
 * @component ModalEntry - Log in to the app
 * */

const ModalEntry = ({
  theme
}) => /*#__PURE__*/react.createElement("section", {
  className: "modal text-body",
  tabIndex: "-1"
}, /*#__PURE__*/react.createElement("section", {
  className: "modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down"
}, /*#__PURE__*/react.createElement("section", {
  className: `${theme === 'dark' ? 'modal-content bg-dark text-light' : 'modal-content'}`
}, /*#__PURE__*/react.createElement("header", {
  className: "modal-header"
}, /*#__PURE__*/react.createElement("h5", {
  className: "modal-title"
}, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"), /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: `${theme === 'dark' ? 'btn-close btn-close-white' : 'btn-close'}`,
  "data-bs-dismiss": "modal",
  "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E"
}, ' ')), /*#__PURE__*/react.createElement("article", {
  className: "modal-body"
}, /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "authentication-login",
  className: "form-label"
}, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"), /*#__PURE__*/react.createElement("input", {
  name: "email",
  type: "email",
  className: "form-control",
  id: "authentication-login"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "authentication-password",
  className: "form-label"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/react.createElement("input", {
  name: "password",
  type: "password",
  className: "form-control",
  id: "authentication-password"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3 form-check"
}, /*#__PURE__*/react.createElement("input", {
  type: "checkbox",
  className: "form-check-input",
  id: "exampleCheck1"
}), /*#__PURE__*/react.createElement("label", {
  className: "form-check-label",
  htmlFor: "exampleCheck1"
}, "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F")), /*#__PURE__*/react.createElement("button", {
  type: "submit",
  className: "btn btn-primary",
  "data-modal-entry": "authentication"
}, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/react.createElement("button", {
  type: "submit",
  className: "btn btn-primary ms-2",
  "data-modal-entry": "registration"
}, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))))));

/* harmony default export */ var modal_entry = (ModalEntry);
;// CONCATENATED MODULE: ./src/javascript/components/header/modal/modal-registration.js

/**
 * @component ModalEntry - Registration in the app
 * */

const ModalRegistration = ({
  theme
}) => /*#__PURE__*/react.createElement("section", {
  className: "modal text-body",
  tabIndex: "-1"
}, /*#__PURE__*/react.createElement("section", {
  className: "modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down"
}, /*#__PURE__*/react.createElement("section", {
  className: `${theme === 'dark' ? 'modal-content bg-dark text-light' : 'modal-content'}`
}, /*#__PURE__*/react.createElement("header", {
  className: "modal-header"
}, /*#__PURE__*/react.createElement("h5", {
  className: "modal-title"
}, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: `${theme === 'dark' ? 'btn-close btn-close-white' : 'btn-close'}`,
  "data-bs-dismiss": "modal",
  "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E"
}, ' ')), /*#__PURE__*/react.createElement("article", {
  className: "modal-body"
}, /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "registration-name",
  className: "form-label"
}, "\u0418\u043C\u044F"), /*#__PURE__*/react.createElement("input", {
  name: "name",
  type: "text",
  className: "form-control",
  id: "registration-name"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "registration-surname",
  className: "form-label"
}, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react.createElement("input", {
  name: "surname",
  type: "text",
  className: "form-control",
  id: "registration-surname"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0444\u0430\u043C\u0438\u043B\u0438\u044E")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "registration-email",
  className: "form-label"
}, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"), /*#__PURE__*/react.createElement("input", {
  name: "email",
  type: "email",
  className: "form-control",
  id: "registration-email",
  "aria-describedby": "emailHelp"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "registration-password",
  className: "form-label"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/react.createElement("input", {
  name: "password",
  type: "password",
  className: "form-control",
  id: "registration-password"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C")), /*#__PURE__*/react.createElement("div", {
  className: "mb-3"
}, /*#__PURE__*/react.createElement("label", {
  htmlFor: "registration-password-repeat",
  className: "form-label"
}, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/react.createElement("input", {
  name: "password-repeat",
  type: "password",
  className: "form-control",
  id: "registration-password-repeat"
}), /*#__PURE__*/react.createElement("div", {
  id: "emailHelp",
  className: "form-text"
}, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E")), /*#__PURE__*/react.createElement("button", {
  type: "submit",
  className: "btn btn-primary",
  "data-registration": "registration"
}, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))))));

/* harmony default export */ var modal_registration = (ModalRegistration);
;// CONCATENATED MODULE: ./src/javascript/components/header/modal/index.js




;// CONCATENATED MODULE: ./src/javascript/components/common/toggle/toggle.js

/**
 * @component Toggle - A common component. It switches content hiding to display
 * */

const Toggle = ({
  text,
  target,
  ariaLabel,
  icon
}) => /*#__PURE__*/react.createElement("section", {
  className: "toggle-content"
}, /*#__PURE__*/react.createElement("button", {
  className: "navbar-toggler",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": target,
  "aria-expanded": "false",
  "aria-label": ariaLabel
}, /*#__PURE__*/react.createElement("i", {
  className: `bi ${icon}`
}, " "), /*#__PURE__*/react.createElement("span", {
  className: "ps-2"
}, text)));

/* harmony default export */ var toggle = (Toggle);
;// CONCATENATED MODULE: ./src/javascript/components/common/toggle/index.js

/* harmony default export */ var common_toggle = (toggle);
;// CONCATENATED MODULE: ./src/javascript/components/common/messanges/message.js


const Message = ({
  title,
  description,
  classes,
  status
}) => /*#__PURE__*/react.createElement("div", {
  className: `${classes} toast showing`,
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
}, /*#__PURE__*/react.createElement("div", {
  className: "toast-header"
}, /*#__PURE__*/react.createElement("strong", {
  className: "me-auto"
}, title), /*#__PURE__*/react.createElement("small", {
  className: "text-muted"
}, status), /*#__PURE__*/react.createElement("button", {
  type: "button",
  className: "btn-close",
  "data-bs-dismiss": "toast",
  "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
}, ' ')), /*#__PURE__*/react.createElement("div", {
  className: "toast-body"
}, description));

/* harmony default export */ var message = (Message);
;// CONCATENATED MODULE: ./src/javascript/components/common/messanges/messages.js


/**
 * @function popUp - configuring the lifetime of pop-up messages
 * настройка времени жизни всплывающих сообщений
 * @param {function} setToasts - state of current pop-up messages
 * состояние текущих всплывающих сообщений
 * */

const popUp = setToasts => {
  const container = document.querySelector('.toast-container');
  container.addEventListener('click', ({
    target
  }) => {
    if (target.classList.contains('btn-close')) {
      const parent = target.closest('.toast');
      parent === null || parent === void 0 ? void 0 : parent.remove();
    }
  });
  const interval = setInterval(() => {
    const quantity = container.childElementCount;

    if (!quantity) {
      setToasts([]);
      clearInterval(interval);
      return;
    }

    const lastMessage = container.firstElementChild;
    lastMessage.classList.add('toast-hidden');
    setTimeout(() => lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.remove(), 1000);
  }, 5000);
};
/**
 * @function Messages - create pop-up messages
 * создает всплывающие сообщения
 * @param {array} toasts - current pop-up messages
 * текущие всплывающие сообщения
 * @param {function} setToasts - current state pop-up of messages
 * состояние текущих всплывающих сообщений
 * */


const Messages = ({
  toasts,
  setToasts
}) => {
  if (!toasts.length) return null;
  (0,react.useEffect)(() => popUp(setToasts), []);
  const messages = toasts.map(toast => {
    const {
      title,
      description,
      classes,
      status,
      id
    } = toast;
    return /*#__PURE__*/react.createElement(message, {
      title: title,
      description: description,
      classes: classes,
      status: status,
      key: id
    });
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "toast-container position-fixed bottom-0 end-0 p-3"
  }, messages);
};

/* harmony default export */ var messages = (Messages);
;// CONCATENATED MODULE: ./src/javascript/components/common/messanges/index.js

/* harmony default export */ var messanges = (messages);
;// CONCATENATED MODULE: ./src/javascript/components/common/index.js



;// CONCATENATED MODULE: ./src/javascript/functions/themes/themes.js
/**
 * @function themes - changing themes for the app
 * @param { string } component - component name
 * @param { string } theme - current theme
 * @param { string } value - classes for component
 * @param { (Array|null) } taskState - array with state of tasks (optional)
 * */
const themes = (component, theme, value, taskState = null) => {
  let completed;
  let important;
  let classes = `${value} `;

  if (Array.isArray(taskState)) {
    [completed, important] = [taskState[0], taskState[1]];
  }

  if (component === 'header') {
    switch (theme) {
      case 'emerald':
        classes += 'bg-emerald-header';
        break;

      case 'gold':
        classes += 'bg-gold-header';
        break;

      case 'neon':
        classes += 'bg-neon-header';
        break;

      case 'dark':
        classes += 'bg-dark';
        break;

      case 'light':
        classes += 'bg-secondary';
        break;

      default:
        break;
    }
  }

  if (component === 'todo-list') {
    switch (theme) {
      case 'emerald':
        classes += 'bg-emerald-todo-list';
        break;

      case 'gold':
        classes += 'bg-gold-todo-list';
        break;

      case 'neon':
        classes += 'bg-neon-todo-list';
        break;

      case 'dark':
        classes += 'bg-dark-todo-list';
        break;

      case 'light':
        classes += 'bg-light';
        break;

      default:
        break;
    }
  }

  if (component === 'tasks') {
    switch (theme) {
      case 'emerald':
        classes += 'list-item-emerald-theme';
        break;

      case 'gold':
        classes += 'list-item-gold-theme';
        break;

      case 'neon':
        classes += 'list-item-neon-theme';
        break;

      case 'dark':
        classes += 'list-item-dark-theme';
        break;

      case 'light':
        classes += '';
        break;

      default:
        break;
    }
  }

  if (component === 'task') {
    switch (theme) {
      case 'emerald':
        if (important) {
          classes += 'task-important task-important-emerald';
        }

        if (completed) {
          classes += ' task-complete task-complete-emerald';
        }

        break;

      case 'gold':
        if (important) {
          classes += 'task-important task-important-gold';
        }

        if (completed) {
          classes += ' task-complete task-complete-gold';
        }

        break;

      case 'neon':
        if (important) {
          classes += 'task-important task-important-neon';
        }

        if (completed) {
          classes += ' task-complete task-complete-neon';
        }

        break;

      case 'dark':
        if (important) {
          classes += 'task-important task-important-dark';
        }

        if (completed) {
          classes += ' task-complete task-complete-dark';
        }

        break;

      case 'light':
        if (important) {
          classes += 'task-important task-important-light';
        }

        if (completed) {
          classes += ' task-complete task-complete-light';
        }

        break;

      default:
        break;
    }
  }

  if (component === 'footer') {
    switch (theme) {
      case 'emerald':
        classes += 'bg-emerald-footer';
        break;

      case 'gold':
        classes += 'bg-gold-footer';
        break;

      case 'neon':
        classes += 'bg-neon-footer';
        break;

      case 'dark':
        classes += 'bg-dark';
        break;

      case 'light':
        classes += 'bg-secondary';
        break;

      default:
        break;
    }
  }

  if (component === 'information' || component === 'about') {
    switch (theme) {
      case 'emerald':
        classes += 'list-group-item-success';
        break;

      case 'gold':
        classes += 'list-group-item-warning';
        break;

      case 'neon':
        classes += 'list-group-item-info';
        break;

      case 'dark':
        classes += 'list-group-item-light';
        break;

      case 'light':
        classes += '';
        break;

      default:
        break;
    }
  }

  return classes;
};

/* harmony default export */ var themes_themes = (themes);
;// CONCATENATED MODULE: ./src/javascript/functions/themes/index.js

/* harmony default export */ var functions_themes = (themes_themes);
;// CONCATENATED MODULE: ./src/javascript/components/header/header.js
/*
 * The main component of the site header
 * */







/**
 * @component Header - The main component of the site header.
 * Render: Title, ChangeTheme, ChangeLanguage, Authentication, Modal, ModalEntry, ModalRegistration
 * */

const Header = ({
  onChangeTheme,
  theme,
  setLanguage
}) => {
  const classes = functions_themes('header', theme, 'todo-header container-fluid text-light');
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("header", {
    className: classes
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mixin-header navbar-dark justify-content-center justify-content-sm-between"
  }, /*#__PURE__*/react.createElement(title, null), /*#__PURE__*/react.createElement(common_toggle, {
    text: language === 'ru' ? 'Менеджер задач' : 'Task manager',
    target: "#header-toggle",
    ariaLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430",
    icon: "navbar-toggler-icon"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "row collapse",
    id: "header-toggle"
  }, /*#__PURE__*/react.createElement(change_theme, {
    onChangeTheme: onChangeTheme,
    theme: theme
  }), /*#__PURE__*/react.createElement(change_language, {
    setLanguage: setLanguage
  })), /*#__PURE__*/react.createElement(modal, {
    theme: theme
  }), /*#__PURE__*/react.createElement(modal_entry, {
    theme: theme
  }), /*#__PURE__*/react.createElement(modal_registration, {
    theme: theme
  }));
};

/* harmony default export */ var header = (Header);
;// CONCATENATED MODULE: ./src/javascript/components/header/index.js

/* harmony default export */ var components_header = (header);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/buttons/buttons.js



const Buttons = ({
  taskToggle,
  tasks,
  text
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
    onClick: taskToggle.showAllTasks,
    type: "button",
    className: "btn-filter btn btn-outline-secondary p-1",
    "data-filter": "all",
    disabled: !(tasks !== null && tasks !== void 0 && tasks.length)
  }, text, " ", language === 'ru' ? 'все' : 'all'), /*#__PURE__*/react.createElement("button", {
    onClick: taskToggle.showImportantTasks,
    type: "button",
    className: "btn-filter btn btn-outline-secondary p-1",
    "data-filter": "important",
    disabled: !(JSON.parse(localStorage.getItem('tasks')) || [...tasks]).some(task => task.important)
  }, text, " ", language === 'ru' ? 'важные' : 'important'), /*#__PURE__*/react.createElement("button", {
    onClick: taskToggle.showCompletedTasks,
    type: "button",
    className: "btn-filter btn btn-outline-secondary p-1",
    "data-filter": "completed",
    disabled: !(JSON.parse(localStorage.getItem('tasks')) || [...tasks]).some(task => task.completed)
  }, text, " ", language === 'ru' ? 'завершенные' : 'completed'), /*#__PURE__*/react.createElement("button", {
    onClick: taskToggle.showActiveTasks,
    type: "button",
    className: "btn-filter btn btn-outline-secondary p-1 active",
    "data-filter": "active",
    disabled: !(tasks !== null && tasks !== void 0 && tasks.length)
  }, text, " ", language === 'ru' ? 'активные' : 'active'));
};

/* harmony default export */ var buttons = (Buttons);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/buttons/index.js

/* harmony default export */ var todo_list_buttons = (buttons);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/search/search.js



/**
 * @component Search - Finds tasks by keywords.
 * Ability to search all, important or completed tasks
 * */

const Search = ({
  tasks,
  taskToggle,
  search
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("div", {
    className: "[ col-12 col-lg-8 ] mb-3"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "search",
    className: "form-label"
  }, language === 'ru' ? 'Поиск задач:' : 'Task Search:'), /*#__PURE__*/react.createElement("input", {
    onInput: search.searchTasks,
    value: search.searchTasksValue,
    type: "text",
    className: "form-control",
    id: "search",
    "aria-describedby": "emailHelp",
    placeholder: language === 'ru' ? 'Введите слова для поиска разделяя их пробелом' : 'Enter the words to search by separating them with a space',
    disabled: !(tasks !== null && tasks !== void 0 && tasks.length)
  }), /*#__PURE__*/react.createElement("div", {
    className: "btn-group mt-2",
    role: "group",
    "aria-label": "Basic outlined example"
  }, /*#__PURE__*/react.createElement(todo_list_buttons, {
    taskToggle: taskToggle,
    tasks: tasks,
    text: language === 'ru' ? 'Искать' : 'Search'
  })), /*#__PURE__*/react.createElement("div", {
    id: "emailHelp",
    className: "form-text"
  }, language === 'ru' ? 'Вы можете найти свои задачи используя этот поиск' : 'You can find your tasks using this search'));
};

/* harmony default export */ var search = (Search);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/search/index.js

/* harmony default export */ var todo_list_search = (search);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/tasks/description.js


/**
 * @component Description - Contains a custom task
 * */

const Description = ({
  title,
  description,
  important,
  completed,
  created,
  deadline
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  let classes = 'bi ';

  switch (true) {
    case completed:
      classes += 'bi-check2-circle';
      break;

    case important:
      classes += 'bi-exclamation-diamond';
      break;

    default:
      classes += 'bi-bookmarks-fill';
  }

  return /*#__PURE__*/react.createElement("article", {
    className: "todo-article text-center text-md-start"
  }, /*#__PURE__*/react.createElement("header", {
    className: "{ mixin-list-item-child } border-bottom mb-2"
  }, language === 'ru' ? 'Задание было создано:' : 'The task has been created:', ' ', /*#__PURE__*/react.createElement("span", {
    className: "d-inline-block"
  }, created || 'auto')), /*#__PURE__*/react.createElement("h2", {
    className: "todo-heading"
  }, /*#__PURE__*/react.createElement("i", {
    className: classes
  }, " "), /*#__PURE__*/react.createElement("span", {
    className: "p-1",
    "data-edit": "heading"
  }, title)), /*#__PURE__*/react.createElement("p", {
    className: "todo-content",
    "data-edit": "content"
  }, description), /*#__PURE__*/react.createElement("footer", {
    className: "{ mixin-list-item-child } border-top mt-2"
  }, /*#__PURE__*/react.createElement("i", {
    className: "bi bi-watch"
  }, " "), language === 'ru' ? 'Крайний срок:' : 'Deadline:', /*#__PURE__*/react.createElement("time", {
    className: "d-inline-block ps-1",
    "data-deadline": ""
  }, ' ', language === 'ru' ? deadline || '00д : 24ч : 54м : 22c' : deadline || '00d : 24h : 54m : 22s')));
};

/* harmony default export */ var tasks_description = (Description);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/tasks/interface.js


/**
 * @component Interface - Render of user interfaces for task
 * */

const Interface = ({
  taskEvents,
  isImportant,
  isCompleted
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  let textForImportantBtn;
  let textForCompletedBtn;

  if (language === 'ru') {
    textForImportantBtn = isImportant ? 'Простая' : 'Важная';
    textForCompletedBtn = isCompleted ? 'Вернуть' : 'Выполнена';
  } else {
    textForImportantBtn = isImportant ? 'Simple' : 'Important';
    textForCompletedBtn = isCompleted ? 'Back' : 'Complete';
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "todo-interfaces d-flex flex-wrap min-w-320"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: taskEvents.onImportant,
    type: "button",
    className: "btn btn-interface btn-outline-warning button-info",
    "data-interface": "important",
    disabled: !!isCompleted
  }, textForImportantBtn), /*#__PURE__*/react.createElement("button", {
    onClick: taskEvents.onCompleted,
    type: "button",
    className: "btn btn-interface btn-outline-success button-info",
    "data-interface": "completed"
  }, textForCompletedBtn), /*#__PURE__*/react.createElement("button", {
    onClick: taskEvents.onEditing,
    type: "button",
    className: "btn btn-interface btn-outline-secondary button-info",
    "data-interface": "edit",
    disabled: !!isCompleted
  }, language === 'ru' ? 'Редактировать' : 'Edit'), /*#__PURE__*/react.createElement("button", {
    onClick: taskEvents.onDeleted,
    type: "button",
    className: "btn btn-interface btn-outline-danger button-info",
    "data-interface": "delete"
  }, language === 'ru' ? 'Удалить' : 'Delete'));
};

/* harmony default export */ var tasks_interface = (Interface);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/tasks/task.js




/**
 * @component Task - Render task description and task interface.
 * Defining the topic, priority, and execution
 * */

const Task = ({
  taskEvents,
  task,
  theme,
  classes
}) => {
  const {
    id,
    title,
    description,
    important,
    completed,
    created,
    deadline,
    hidden
  } = task;
  const classesWithTheme = functions_themes('task', theme, classes, [completed, important]);
  return /*#__PURE__*/react.createElement("li", {
    className: classesWithTheme,
    "data-identify": id,
    hidden: !!hidden
  }, /*#__PURE__*/react.createElement(tasks_description, {
    title: title,
    description: description,
    important: important,
    completed: completed,
    created: created,
    deadline: deadline
  }), /*#__PURE__*/react.createElement(tasks_interface, {
    taskEvents: taskEvents,
    isImportant: important,
    isCompleted: completed
  }));
};

/* harmony default export */ var tasks_task = (Task);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/tasks/tasks.js



/**
 * @component Tasks - Render of all components of the Task.
 * The number of task components is the size of the array { tasks }
 * */

const Tasks = ({
  taskEvents,
  tasks,
  theme
}) => {
  const classes = functions_themes('tasks', theme, '{ mixin-list-item } flex-md-row p-1 p-md-2');
  return /*#__PURE__*/react.createElement("main", {
    className: "row pt-2"
  }, /*#__PURE__*/react.createElement("section", {
    className: "[ col-12 ]"
  }, /*#__PURE__*/react.createElement("ul", {
    onClick: ({
      target
    }) => taskEvents.setEditable(target),
    onFocus: taskEvents.editableTaskIn,
    onBlur: taskEvents.editableTaskOut,
    onKeyDown: taskEvents.editableTaskExit,
    onDoubleClick: taskEvents.editableTaskEntry,
    className: "list-group"
  }, tasks.map(task => /*#__PURE__*/react.createElement(tasks_task, {
    taskEvents: taskEvents,
    key: task.id,
    task: task,
    theme: theme,
    classes: classes
  })))));
};

/* harmony default export */ var tasks = (Tasks);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/tasks/index.js

/* harmony default export */ var todo_list_tasks = (tasks);
// EXTERNAL MODULE: ./node_modules/@date-io/date-fns/build/index.esm.js + 56 modules
var index_esm = __webpack_require__(4413);
// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/esm/DateTimePicker.js + 169 modules
var DateTimePicker = __webpack_require__(3978);
// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js
var useUtils_cfb96ac9 = __webpack_require__(7827);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/ru/index.js + 6 modules
var ru = __webpack_require__(8523);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(1695);
;// CONCATENATED MODULE: ./src/javascript/library/material-ui-pickers/material-ui-pickers.js




const localeMap = {
  en: en_US/* default */.Z,
  ru: ru/* default */.Z
};

;// CONCATENATED MODULE: ./src/javascript/library/material-ui-pickers/index.js


;// CONCATENATED MODULE: ./src/javascript/components/todo-list/send/send.js



/**
 * @component Send - Send a task to the database
 * */

const Send = ({
  submit
}) => {
  const {
    selectedDate,
    handleDateChange
  } = submit;
  const language = (0,react.useContext)(language_language) || 'ru';
  /**
   * @component Deadline - deadline for completion if the deadline for the flag was set as 'true'
   * */

  const Deadline = () => /*#__PURE__*/react.createElement(useUtils_cfb96ac9.M, {
    utils: index_esm/* default */.Z,
    locale: localeMap[language]
  }, /*#__PURE__*/react.createElement(DateTimePicker/* DateTimePicker */.x, {
    value: selectedDate,
    onChange: handleDateChange
  }));

  return /*#__PURE__*/react.createElement("section", {
    className: "row collapse",
    id: "add-task"
  }, /*#__PURE__*/react.createElement("form", {
    noValidate: true
  }, /*#__PURE__*/react.createElement("div", {
    className: "mb-3 mt-3"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "todo-title",
    className: "form-label"
  }, language === 'ru' ? 'Добавить новую задачу:' : 'Add a new task:'), /*#__PURE__*/react.createElement("input", {
    onInput: submit.onInputTitle,
    value: submit.submitTitle,
    name: "todo-title",
    type: "text",
    className: "form-control",
    id: "todo-title",
    "aria-describedby": "emailHelp",
    placeholder: language === 'ru' ? 'Введите название новой задачи:' : 'Enter the name of the new task:'
  }), /*#__PURE__*/react.createElement("div", {
    className: "invalid-feedback"
  }, language === 'ru' ? 'Название задачи должно быть длиннее семи символов и может содержать символы\n' + 'русского или английского алфавита, цифры и следующие знаки: ! ? $ % & * ( )\n' + '+ = -' : 'The task name must be longer than seven characters and may contain the characters \n' + 'Russian or English alphabet, numbers and the following characters: ! ? $ % & * ( )\n' + '+ = -'), /*#__PURE__*/react.createElement("div", {
    className: "form-text"
  }, language === 'ru' ? 'Опишите вашу задачу:' : 'Describe your task:'), /*#__PURE__*/react.createElement("textarea", {
    onInput: submit.onInputDescription,
    value: submit.submitDescription,
    name: "todo-description",
    className: "form-control input-fix-tgl",
    placeholder: language === 'ru' ? 'Введите текст новой задачи' : 'Enter the text of the new task',
    id: "todo-description"
  }), /*#__PURE__*/react.createElement("div", {
    className: "invalid-feedback"
  }, language === 'ru' ? 'Описание задачи должно быть длиннее семи символов и может содержать символы\n' + 'русского или английского алфавита, цифры и следующие знаки: ! ? $ % & * ( )\n' + '+ = -' : 'The task description must be longer than seven characters and may contain the characters \n' + 'Russian or English alphabet, numbers and the following characters: ! ? $ % & * ( )\n' + '+ = -'), /*#__PURE__*/react.createElement("div", {
    className: "form-check pt-1"
  }, /*#__PURE__*/react.createElement("input", {
    onChange: submit.onChangeImportant,
    checked: submit.submitImportant,
    name: "important",
    className: "form-check-input",
    type: "checkbox",
    value: "important",
    id: "important"
  }), /*#__PURE__*/react.createElement("label", {
    className: "form-check-label",
    htmlFor: "important"
  }, language === 'ru' ? 'Отметить как важную' : 'Mark as important')), /*#__PURE__*/react.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react.createElement("input", {
    onChange: submit.onChangeCompleted,
    checked: submit.submitCompleted,
    name: "completed",
    className: "form-check-input",
    type: "checkbox",
    value: "completed",
    id: "completed"
  }), /*#__PURE__*/react.createElement("label", {
    className: "form-check-label",
    htmlFor: "completed"
  }, language === 'ru' ? 'Отметить как завершенную' : 'Mark as completed')), /*#__PURE__*/react.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react.createElement("input", {
    onChange: submit.onDeadlineEnable,
    checked: submit.submitDeadline,
    name: "deadline",
    className: "form-check-input",
    type: "checkbox",
    value: "deadline",
    id: "deadline"
  }), /*#__PURE__*/react.createElement("label", {
    className: "form-check-label",
    htmlFor: "deadline"
  }, language === 'ru' ? 'Установить крайний срок' : 'Set a deadline')), submit.submitDeadline ? /*#__PURE__*/react.createElement(Deadline, null) : null), /*#__PURE__*/react.createElement("button", {
    onClick: submit.addTask,
    type: "button",
    className: "btn btn-outline-secondary w-100"
  }, language === 'ru' ? 'Добавить' : 'Add')));
};

/* harmony default export */ var send = (Send);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/send/index.js

/* harmony default export */ var todo_list_send = (send);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/counter/counter.js


/**
 * @component Counter - Show information about tasks.
 * Number of current and completed tasks.
 * */

const Counter = ({
  tasks
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("div", {
    className: "[ col-12 col-lg-4 ] d-flex flex-column align-items-end"
  }, /*#__PURE__*/react.createElement("div", null, language === 'ru' ? 'Заданий осталось выполнить:' : 'Tasks left to complete:', /*#__PURE__*/react.createElement("span", {
    "data-todo": "still"
  }, ` ${tasks.filter(task => !task.completed).length}`)), /*#__PURE__*/react.createElement("div", null, language === 'ru' ? 'Заданий выполнено:' : 'Tasks completed:', /*#__PURE__*/react.createElement("span", {
    "data-todo": "complete"
  }, ` ${tasks.filter(task => task.completed).length}`)));
};

/* harmony default export */ var counter = (Counter);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/counter/index.js

/* harmony default export */ var todo_list_counter = (counter);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/filter/filters.js



/**
 * @component Filters - Task filter.
 * Ability to show all, important or completed tasks
 * */

const Filters = ({
  tasks,
  taskToggle
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  return /*#__PURE__*/react.createElement("section", {
    className: "row justify-content-end mb-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "[ col-12 col-xl-6 col-md-8 ] btn-group mt-2",
    role: "group",
    "aria-label": "Todo list buttons"
  }, /*#__PURE__*/react.createElement(todo_list_buttons, {
    taskToggle: taskToggle,
    tasks: tasks,
    text: language === 'ru' ? 'Показать' : 'Show'
  })));
};

/* harmony default export */ var filters = (Filters);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/filter/index.js

/* harmony default export */ var filter = (filters);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/todo-list.js
/*
 * Component todo-list
 * */









/**
 * @component TodoList - Main component for todos
 * Render: Search, Tasks, Send, Counter, Filters and 2 Toggle
 * */

const TodoList = ({
  taskEvents,
  taskToggle,
  submit,
  tasks,
  theme,
  search
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  const classes = functions_themes('todo-list', theme, 'todo-list flex-grow-1 transition-bg');
  return /*#__PURE__*/react.createElement("section", {
    className: classes
  }, /*#__PURE__*/react.createElement("section", {
    className: "[ container-xl col-12 ]"
  }, /*#__PURE__*/react.createElement(common_toggle, {
    text: language === 'ru' ? 'Показать поиск' : 'Show search',
    target: "#search-toggle",
    ariaLabel: language === 'ru' ? 'Показать меню для поиска заданий' : 'Show the task search menu',
    icon: "bi-search"
  }), /*#__PURE__*/react.createElement("section", {
    className: "row align-items-end collapse",
    id: "search-toggle"
  }, /*#__PURE__*/react.createElement(todo_list_search, {
    tasks: tasks,
    taskToggle: taskToggle,
    search: search
  }), /*#__PURE__*/react.createElement(todo_list_counter, {
    tasks: tasks
  })), /*#__PURE__*/react.createElement(todo_list_tasks, {
    taskEvents: taskEvents,
    tasks: tasks,
    theme: theme
  }), /*#__PURE__*/react.createElement(filter, {
    taskToggle: taskToggle,
    tasks: tasks
  }), /*#__PURE__*/react.createElement(common_toggle, {
    text: language === 'ru' ? 'Создать задание' : 'Create task',
    target: "#add-task",
    ariaLabel: language === 'ru' ? 'Показать меню для создания заданий' : 'Show task create menu',
    icon: "bi-pencil-fill"
  }), /*#__PURE__*/react.createElement(todo_list_send, {
    submit: submit
  })));
};

/* harmony default export */ var todo_list = (TodoList);
;// CONCATENATED MODULE: ./src/javascript/components/todo-list/index.js

/* harmony default export */ var components_todo_list = (todo_list);
;// CONCATENATED MODULE: ./src/javascript/components/footer/footer.js



/**
 * @component Footer - Render the footer of the site
 * Render: Toggle, Information, About
 * */

const Footer = ({
  theme
}) => {
  const language = (0,react.useContext)(language_language) || 'ru';
  const classes = functions_themes('footer', theme, '{ mixin-footer } todo-footer container-fluid navbar-dark');
  return /*#__PURE__*/react.createElement("footer", {
    className: classes
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-end text-uppercase"
  }, language === 'ru' ? 'Менеджер задач' : 'Task Manager'));
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./src/javascript/components/footer/index.js

/* harmony default export */ var components_footer = (footer);
;// CONCATENATED MODULE: ./src/javascript/components/App.js
/*
 * Main app component
 * Основной компонент приложения
 */






/**
 * @component App - main app component.
 * основной компонент приложения
 * */

const App = () => {
  /*
   * If the application was downloaded for the first time
   * or the local state has been deleted and the user is not logged in
   * the default task is used
   * Если приложение было загружено с устройства впервые
   * или локальное хранилище не было обнаружено и пользователь
   * ко всему не зарегистрирован на сайте, то данное задание будет использовано
   * по умолчанию
   */
  const defaultTask = [
  /* eslint-disable max-len */
  {
    id: 1,
    title: 'Это задание создано автоматически для примера',
    description: 'Вы можете отредактировать его и начать создавать другие задания. Зарегистрируйтесь на сайте что-бы получить больше возможностей. Удачи!',
    important: false,
    completed: false,
    created: 'автоматически',
    deadline: '1d 1h 1m 1s',
    hidden: false
  }
  /* eslint-enable max-len */
  ];
  /* states and use effects */

  /*
   * theme state
   * состояние темы
   * */

  const [theme, setTheme] = (0,react.useState)(localStorage.getItem('theme') || 'light');
  /**
   * @function deadlineSettingBeforeRender - creates a date format before task render
   * создает корректный формат даты до отрисовки заданий
   * @param {deadlineTimeStamp} date - deadline timestamp (current date of deadline)
   * @return {string} - formatted data
   * возвращает отформатированную дату
   * */
  // eslint-disable-next-line consistent-return

  const deadlineSettingBeforeRender = ({
    deadlineTimeStamp
  }) => {
    const currentTimestamp = +new Date();
    const seconds = Math.floor((deadlineTimeStamp - currentTimestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const daysLeft = Math.floor(hours / 24);
    const hoursLeft = hours - daysLeft * 24;
    const minutesLeft = minutes - hours * 60;
    const secondsLeft = seconds - minutes * 60;
    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  };
  /*
   * task state (get tasks and show only active ones at the first download)
   * при каждой загрузке страницы будет взят объект из локального хранилища
   * или задание по умолчанию в случае его отсутствия. Далее будут отфильтрованы все
   * не выполненные задания и установлены как начальное значение состояния tasks
   * предварительно переключив флаг флаг в положение false
   *  */


  const [tasks, setTasks] = (0,react.useState)((JSON.parse(localStorage.getItem('tasks')) || defaultTask).filter(task => {
    if (task.deadlineTimeStamp) {
      Object.assign(task, {
        deadline: deadlineSettingBeforeRender(task)
      });
    }

    if (task && !task.completed) {
      return Object.assign(task, {
        hidden: false
      });
    }

    return Object.assign(task, {
      hidden: true
    });
  }));
  /*
   * set deadline. component 'send', library - material-ui-pickers
   * настройка крайнего срока выполнения задачи. библиотека - material-ui-pickers
   * */

  const [selectedDate, handleDateChange] = (0,react.useState)(new Date());
  /*
   * other node elements state
   * состояние для кнопок добавления задачи, активной задачи, заголовка и описания
   * */

  const [sendButton, setSendButton] = (0,react.useState)(null);
  const [activeButton, setActiveButton] = (0,react.useState)(null);
  const [submitTitleElement, setSubmitTitleElement] = (0,react.useState)(null);
  const [submitDescElement, setSubmitDescElement] = (0,react.useState)(null);
  /*
   * setting state after mounting
   * настройка состояний после монтирования компонента
   * */

  (0,react.useEffect)(() => {
    setSendButton(document.querySelector('[data-bs-target="#add-task"]'));
    setActiveButton(document.querySelector('[data-filter="active"]'));
    setSubmitTitleElement(document.getElementById('todo-title'));
    setSubmitDescElement(document.getElementById('todo-description'));
  }, []);
  /**
   * @function deadline - set deadline for task
   * отображает оставшееся время выполнения задачи
   * */

  const deadline = () => {
    const deadlines = [...document.querySelectorAll('[data-deadline]')];

    const countdown = () => {
      deadlines.forEach(deadLine => {
        let [days, hours, minutes, seconds] = deadLine.textContent.trim().split(' ').map(x => parseInt(x, 10));
        const timerIsActive = days || hours || minutes || seconds;

        if (timerIsActive) {
          seconds -= 1;

          if (seconds < 0 && minutes >= 0) {
            seconds = 59;
            minutes -= 1;
          }

          if (minutes < 0 && hours >= 0) {
            minutes = 59;
            hours -= 1;
          }

          if (hours < 0 && days >= 1) {
            hours = 24;
            days -= 1;
          }

          Object.assign(deadLine, {
            textContent: `${days}d ${hours}h ${minutes}m ${seconds}s`
          });
        }
      });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  };
  /*
   * effect for deadline
   * эффект для настройки крайнего срока задачи
   * */


  (0,react.useEffect)(deadline, [tasks]);
  /*
   * pop-up messages
   * всплывающие сообщения
   */

  const [toasts, setToasts] = (0,react.useState)([]);
  /*
   * language state
   * состояние локализации
   *  */

  const [language, setLanguage] = (0,react.useState)(localStorage.getItem('language') || 'ru');
  /*
   * setting the states of the controlled component (todo-list/send)
   * настройка состояния для контролируемых компонентов формы (todo-list/send)
   */

  const [submitTitle, setSubmitTitle] = (0,react.useState)('');
  const [submitDescription, setSubmitDescription] = (0,react.useState)('');
  const [submitImportant, setSubmitImportant] = (0,react.useState)(false);
  const [submitCompleted, setSubmitCompleted] = (0,react.useState)(false);
  const [submitDeadline, setSubmitDeadline] = (0,react.useState)(false);
  /*
   * setting the states of the current editable contents (todo-list/tasks)
   * состояние текущего редактируемого контента (todo-list/tasks)
   */

  const [editableContent, setEditableContent] = (0,react.useState)({});
  /*
   * setting the states of the current editable button
   * текущая кнопка 'редактировать'
   */

  const [currentEditableButton, setCurrentEditableButton] = (0,react.useState)(null);
  /*
   * timer removal editable attribute
   * таймер удаления атрибута editable
   */

  let [toggleEditableAttributeTimer] = (0,react.useState)(null);
  /*
   * the filter button will be a pointer to the current filter
   * all, important, completed, current - active
   * all, active, important, completed
   * состояние для отслеживания текущей кнопки фильтра задач
   * необходимо для того что-бы понять какие задачи скрывать при переключении
   * all, important, completed, current - active
   */

  const [filterButton, setFilterButton] = (0,react.useState)('active');
  /*
   * state for task search
   * поиск задачи
   */

  const [searchTasksValue, setSearchTasksValue] = (0,react.useState)('');
  /*
   * validate before sending
   * клиентская валидация перед отправкой данных
   */

  const [sendingDataIsValid, setSendingDataIsValid] = (0,react.useState)(null);
  /*
   * state task content before editing
   * состояние контента задачи перед редактированием
   * позволяет понять нужно ли сохранять данные
   */

  const [contentBeforeEdit, setContentBeforeEdit] = (0,react.useState)(null);
  /**
   * @function searchTasks - search for tasks via the search form
   * поиск заданий
   * @param {(HTMLInputElement|Object)} target - input element
   * элемент input
   * STATE: setTasks, setSearchTasksValue
   * */

  const searchTasks = ({
    target: {
      value
    }
  }) => {
    const todos = [...tasks].map(task => {
      const matchContent = [...task.title.split(' '), ...task.description.split(' ')].filter(word => {
        const regexp = new RegExp(`^${word}$`, 'gi');
        const matches = value.split(' ').filter(val => val.match(regexp));
        if (matches.length) return matches;
        return null;
      });

      if (matchContent.length || !value.trim().length) {
        if (filterButton === 'all') {
          Object.assign(task, {
            hidden: false
          });
        }

        if (filterButton === 'active' && !task.completed) {
          Object.assign(task, {
            hidden: false
          });
        }

        if (filterButton === 'important' && task.important) {
          Object.assign(task, {
            hidden: false
          });
        }

        if (filterButton === 'completed' && task.completed) {
          Object.assign(task, {
            hidden: false
          });
        }
      } else {
        Object.assign(task, {
          hidden: true
        });
      }

      return task;
    });
    setSearchTasksValue(value);
    setTasks(todos);
  };
  /* functions for working with task filters
   * it includes buttons for search and filtering modules
   * группа функций по работе с фильтрами заданий
   * включает кнопки модуля поиска и фильтрации
   */

  /**
   * @function setButtonAsActive - sets the active button for the filter or search
   * устанавливает кнопку активной для модулей поиска и фильтрации заданий
   * @param {HTMLElement} target - current button
   * текущая кнопка
   * */


  const setButtonAsActive = target => {
    const type = target.getAttribute('data-filter');
    const buttons = [...document.querySelectorAll('.btn-filter'), ...document.querySelectorAll('.btn-search')];
    buttons.map(button => {
      button.classList.remove('active');
      const sameFilterType = button.getAttribute('data-filter') === type;

      if (button === target || sameFilterType) {
        button.classList.add('active');
      }

      return button;
    });
  };
  /**
   * @function showAllTasks - shows all tasks on the page
   * показывает все задания на странице
   * @param {HTMLElement} - current button (all)
   * текущая кнопка (все)
   * STATE: setTasks, setFilterButton, setSearchTasksValue
   * */


  const showAllTasks = ({
    target
  }) => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [...tasks];
    const all = todos.map(todo => Object.assign(todo, {
      hidden: false
    }));
    setButtonAsActive(target);
    setTasks(all);
    setFilterButton('all');
    setSearchTasksValue('');
  };
  /**
   * @function showActiveTasks - shows active tasks on the page
   * показывает активные задания на странице
   * @param {HTMLElement} - current button (actives)
   * текущая кнопка (активные)
   * STATE: setTasks, setFilterButton, setSearchTasksValue
   * */


  const showActiveTasks = ({
    target
  }) => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [...tasks];
    const active = todos.map(task => {
      if (task.completed) {
        const hidden = true;
        Object.assign(task, {
          hidden
        });
      } else {
        const hidden = false;
        Object.assign(task, {
          hidden
        });
      }

      return task;
    });
    setButtonAsActive(target);
    setTasks(active);
    setFilterButton('active');
    setSearchTasksValue('');
  };
  /**
   * @function showImportantTasks - shows important tasks on the page
   * показывает все важные задания на странице
   * @param {HTMLElement} - current button (important)
   * текущая кнопка
   * STATE: setTasks, setFilterButton, setSearchTasksValue
   * */


  const showImportantTasks = ({
    target
  }) => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [...tasks];
    const important = todos.map(task => {
      if (!task.important) {
        const hidden = true;
        Object.assign(task, {
          hidden
        });
      } else {
        const hidden = false;
        Object.assign(task, {
          hidden
        });
      }

      return task;
    });
    setTasks(important);
    setButtonAsActive(target);
    setFilterButton('important');
    setSearchTasksValue('');
  };
  /**
   * @function showCompletedTasks - shows completed tasks on the page
   * показывает все завершенные задания на странице
   * @param {HTMLElement} - current button (completed)
   * текущая кнопка (выполненные)
   * CHANGE STATE: setTasks, setFilterButton, setSearchTasksValue
   * */


  const showCompletedTasks = ({
    target
  }) => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [...tasks];
    const complete = todos.map(task => {
      if (!task.completed) {
        const hidden = true;
        Object.assign(task, {
          hidden
        });
      } else {
        const hidden = false;
        Object.assign(task, {
          hidden
        });
      }

      return task;
    });
    setButtonAsActive(target);
    setTasks(complete);
    setFilterButton('completed');
    setSearchTasksValue('');
  };
  /*
   * functions for controlled components (todo-list/send)
   * функции по работе с контролируемыми компонентами при отправке задания
   */

  /**
   * @function onInputTitle - configuring the task header before sending
   * валидация и сохранение заголовка будущего задания перед отправкой
   * @param {string} value - user-entered value
   * вводимое пользователем значение
   * CHANGE STATE: submitTitle
   * */


  const onInputTitle = ({
    target: {
      value
    }
  }) => {
    /* eslint-disable no-use-before-define */
    setSubmitTitle(value);
    sendValidation('title');
    /* eslint-enable no-use-before-define */
  };
  /**
   * @function onInputDescription - configuring the task content before sending
   * валидация и сохранение описания будущего задания перед отправкой
   * @param {string} value - user-entered value
   * вводимое пользователем значение
   * CHANGE STATE: submitDescription
   * */


  const onInputDescription = ({
    target: {
      value
    }
  }) => {
    /* eslint-disable no-use-before-define */
    setSubmitDescription(value);
    sendValidation('description');
    /* eslint-enable no-use-before-define */
  };
  /**
   * @function onChangeImportant - setting the importance of the task
   * сохранение флага о важности задачи
   * @param {boolean} checked - user-selected flag
   * текущий флаг установленный пользователем
   * CHANGE STATE: submitImportant
   * */


  const onChangeImportant = ({
    target: {
      checked
    }
  }) => {
    if (submitCompleted) {
      setSubmitCompleted(false);
    }

    setSubmitImportant(checked);
  };
  /**
   * @function onChangeImportant - sets whether the task is completed
   * сохранение флага о выполнении задачи
   * @param {boolean} checked - user-selected flag
   * текущий флаг установленный пользователем
   * CHANGE STATE: submitCompleted
   * */


  const onChangeCompleted = ({
    target: {
      checked
    }
  }) => {
    if (submitImportant) {
      setSubmitImportant(false);
    }

    setSubmitCompleted(checked);
  };
  /**
   * @function onDeadlineEnable - sets task deadline
   * сохранение флага, который решает показывать ли крайний срок задания
   * @param {boolean} checked - user-selected flag
   * установленное пользователем значение
   * CHANGE STATE: setSubmitDeadline
   * */


  const onDeadlineEnable = ({
    target: {
      checked
    }
  }) => {
    setSubmitDeadline(checked);
  };
  /*
   * change theme
   * изменение темы
   */

  /**
   * @function onChangeTheme - Change theme for app
   * изменение темы в приложении
   * @param {string} value - value of option element
   * выбранное пользователем значение
   * CHANGE STATE: value, theme
   * CHANGE STORAGE: theme
   */


  const onChangeTheme = ({
    target: {
      value
    }
  }) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  };
  /*
   * validate
   * валидация
   */

  /**
   * @function validate - validation of the header and content values for the task
   * валидация введенного пользователем значения
   * @param {string} value - input value
   * значение введенное пользователем
   * @param {string} content - heading or content
   * заголовок или описание
   * @param {boolean} strict - strict mode for validation
   * строгий режим для валидации
   * @return {(string|boolean)} - edited string or false
   * */


  const validate = (value, content, strict = false) => {
    const pattern = /[^ 0-9a-zа-яё!?$%&*()+=/|.,-]/gi;
    const haveIncorrectSymbols = value.match(pattern);
    const result = value.trim().replace(pattern, '');

    if (strict && haveIncorrectSymbols) {
      return false;
    }

    if (content === 'title') {
      return result.length >= 7 ? result : false;
    }

    if (content === 'description') {
      return result.length >= 10 ? result : false;
    }

    return false;
  };
  /**
   * @function sendValidation - it does validation before sending
   * делает валидацию перед отправкой
   * @param {string} content - which content will be checked
   * проверяемый контент
   * CHANGE STATE: setSendingDataIsValid
   * */


  const sendValidation = content => {
    const title = validate(submitTitleElement.value, 'title');
    const description = validate(submitDescElement.value, 'description');

    if (content === 'title') {
      if (!title) {
        submitTitleElement.classList.add('is-invalid');
        submitTitleElement.classList.remove('is-valid');
      } else {
        submitTitleElement.classList.remove('is-invalid');
        submitTitleElement.classList.add('is-valid');
      }

      setSendingDataIsValid(false);
    }

    if (content === 'description') {
      if (!description) {
        submitDescElement.classList.add('is-invalid');
        submitDescElement.classList.remove('is-valid');
      } else {
        submitDescElement.classList.remove('is-invalid');
        submitDescElement.classList.add('is-valid');
      }

      setSendingDataIsValid(false);
    }

    if (title && description) {
      setSendingDataIsValid(true);
    }
  };
  /*
   * date format
   * формат даты
   */

  /**
   * @function dateFormat - creates a date format
   * создает корректный формат даты
   * @param {Date} date - some date (current date of deadline)
   * некоторая дата
   * @param {string} type - defines the type of formatting
   * форматирование для старта или крайнего срока
   * @return {string} - formatted data
   * возвращает отформатированную дату
   * */
  // eslint-disable-next-line consistent-return


  const dateFormat = (date, type) => {
    if (type === 'start') {
      const formatter = new Intl.DateTimeFormat(language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      const value = formatter.format(date);
      return value.replace(',', ' ');
    }

    if (type === 'deadline' && !submitCompleted) {
      const deadlineTimestamp = +date;
      const currentTimestamp = +new Date();
      const seconds = Math.floor((deadlineTimestamp - currentTimestamp) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const daysLeft = Math.floor(hours / 24);
      const hoursLeft = hours - daysLeft * 24;
      const minutesLeft = minutes - hours * 60;
      const secondsLeft = seconds - minutes * 60;

      if (daysLeft < 0 || hoursLeft < 0 || minutesLeft < 0 || secondsLeft < 0) {
        return '0d 0h 0m 0s';
      }

      return `${daysLeft}д ${hoursLeft}ч ${minutesLeft}м ${secondsLeft}с`;
    }

    return '0d 0h 0m 0s';
  };
  /*
   * add task
   * добавление задания
   */

  /**
   * @function getTypeOfFilter - get type of filter
   * определяет стоит ли задаче появиться или нет при ее добавлении
   * @return {boolean} - true (if need hide task) or false
   */


  const getTypeOfFilter = () => {
    let hidden = false;
    const isActive = filterButton === 'active' && submitCompleted;
    const isCompleted = filterButton === 'completed' && !submitCompleted;
    const isImportant = filterButton === 'important' && !submitImportant;

    if (isActive || isCompleted || isImportant) {
      hidden = true;
    }

    return hidden;
  };
  /**
   * @function addTask - Adding task for app
   * добавление задачи в приложение
   * CHANGE STATE: sendButton, setSubmitTitle, setSubmitDescription
   * setSubmitCompleted, setSubmitImportant, setSubmitDeadline, setTasks
   * setCreatedTaskTime, setDeadlineTask
   * CHANGE STORAGE: tasks
   */


  const addTask = () => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const title = validate(submitTitle, 'title');
    const description = validate(submitDescription, 'description');
    const created = dateFormat(new Date(), 'start'); // eslint-disable-next-line no-shadow

    const deadline = dateFormat(selectedDate, 'deadline');
    const important = submitImportant;
    const completed = submitCompleted;
    const hidden = getTypeOfFilter();
    const added = {
      id,
      title,
      description,
      important,
      completed,
      created,
      deadline,
      hidden,
      deadlineTimeStamp: selectedDate.getTime()
    };

    if (sendingDataIsValid) {
      const todos = [...tasks];
      todos.push(added);
      sendButton.click();
      setSubmitTitle('');
      setSubmitDescription('');
      setSubmitCompleted(false);
      setSubmitImportant(false);
      setSubmitDeadline(false);
      setTasks(todos);
      localStorage.setItem('tasks', JSON.stringify(todos));
      submitTitleElement.classList.remove('is-invalid');
      submitTitleElement.classList.remove('is-valid');
      submitDescElement.classList.remove('is-invalid');
      submitDescElement.classList.remove('is-valid');
    } else {
      const messages = [...toasts];
      messages.push({
        title: language === 'ru' ? 'Данные не будут отправлены' : 'No data will be sent',
        description: language === 'ru' ? `Произошла ошибка при отправке данных. 
                    Вероятно вы ввели не корректные значения полей` : `An error occurred while sending data.
                    You probably entered incorrect field values`,
        classes: 'bg-danger text-light',
        status: language === 'ru' ? 'Ошибка' : 'Error',
        id: messages.length + 1
      });
      setToasts(messages);
    }
  };
  /* a group of functions that define editable content
   * группа функций по работе с редактируемым содержимым задания
   */

  /**
   * @function setEditable - setting up editable content in the state
   * настраивает и сохраняет редактируемый в данный момент контент
   * @param {(HTMLElement|any)} target -  expected 'span' or 'p' element (heading or content)
   * ожидается увидеть заголовок задачи и ее параграф
   * @return {array} - Array with two HTMLElements - heading and content of task
   * массив с заголовком и параграфом задачи в виде HTMLElements
   * CHANGE STATE: setEditableContent
   * Функция выполняется как при щелчке по кнопке "Редактировать"
   * так и при двойном щелчке на области задания
   * */


  const setEditable = target => {
    const parent = target.closest('[data-identify]');

    if (parent) {
      const heading = parent.querySelector('[data-edit="heading"]');
      const content = parent.querySelector('[data-edit="content"]');
      setEditableContent(prevState => {
        if (prevState.heading !== heading) {
          var _prevState$heading, _prevState$content;

          (_prevState$heading = prevState.heading) === null || _prevState$heading === void 0 ? void 0 : _prevState$heading.removeAttribute('contenteditable');
          (_prevState$content = prevState.content) === null || _prevState$content === void 0 ? void 0 : _prevState$content.removeAttribute('contenteditable');
        }

        Object.assign(prevState, {
          heading,
          content
        });
        return prevState;
      });
      return [heading, content];
    }

    return [];
  };
  /**
   * @function deleteContenteditableAttr - deleting editable content
   * from the header or content if the timer
   * (the timer for switching the editable attribute) is not deleted
   * удаляет атрибут 'contenteditable' у элементов задачи
   * @param {HTMLElement} prevHeading - previous item from the state
   * предыдущий заголовок задачи который был в режиме редактирования
   * @param {HTMLElement} prevContent - previous item from the state
   * предыдущий параграф задачи который был в режиме редактирования
   * */


  const deleteContenteditableAttr = (prevHeading, prevContent) => {
    const {
      heading,
      content
    } = editableContent;

    if (heading === prevHeading || content === prevContent) {
      prevHeading.removeAttribute('contenteditable');
      prevContent.removeAttribute('contenteditable');
    }
  };
  /**
   * @function isEditingTaskSuccessfully - checks the correctness of the input data
   * проверка корректности введенных пользователем значений в режиме редактирования задачи
   * @param {HTMLElement} heading - Task title
   * заголовок задачи
   * @param {HTMLElement} content - Task description
   * описание задачи
   * @return {array} - array with the text content of the title and description
   * массив с текстовым содержимым заголовка и описания задачи
   * CHANGE STATE: setToasts
   * */


  const isEditingTaskSuccessfully = (heading, content) => {
    const titleText = validate(heading.textContent, 'title', true);
    const descriptionText = validate(content.textContent, 'description', true);

    if (!titleText || !descriptionText) {
      const messages = [...toasts];
      messages.push({
        title: language === 'ru' ? 'Данные не будут сохранены' : 'The data will not be saved',
        description: language === 'ru' ? 'Текст задания слишком мал или содержит не корректные символы' : 'The task text is too small or contains incorrect characters',
        classes: 'bg-danger text-light',
        status: language === 'ru' ? 'Ошибка' : 'Error',
        id: messages.length + 1
      });
      setToasts(messages);
      return [false];
    }

    if (contentBeforeEdit) {
      const {
        title,
        description
      } = contentBeforeEdit;
      const titleIsSame = title === heading.textContent;
      const descriptionIsSame = description === content.textContent;

      if (!titleIsSame || !descriptionIsSame) {
        const messages = [...toasts];
        messages.push({
          title: language === 'ru' ? 'Задание отредактировано' : 'The task has been edited',
          description: language === 'ru' ? 'Задание сохранено и будет доступно в текущем виде' : 'The task has been saved and will be available in its current form',
          classes: 'bg-success text-light',
          status: language === 'ru' ? 'Успех' : 'Success',
          id: messages.length + 1
        });
        setToasts(messages);
      }
    }

    return [titleText, descriptionText];
  };
  /**
   * @function editableTaskOut - delete 'contenteditable' attr after focus
   * удаляет атрибут 'contenteditable' после потери фокуса элементом
   * @param {HTMLElement} target - 'span' or 'p' element (heading or content)
   * элемент 'span' или 'p' заголовка или контента задачи
   * CHANGE STATE: tasks, setCurrentEditableButton
   * SET STORAGE: tasks
   * EVENT: onBlur
   * */


  const editableTaskOut = ({
    target
  }) => {
    const {
      heading,
      content
    } = editableContent;

    if (target === heading || target === content) {
      const current = heading.closest('[data-identify]');
      const id = Number(current.getAttribute('data-identify'));
      const todos = [...tasks].map(task => {
        if (task.id === id) {
          const [title, description] = isEditingTaskSuccessfully(heading, content);

          if (!title) {
            return task;
          }

          Object.assign(task, {
            title,
            description
          });
        }

        return task;
      });
      target.removeAttribute('contenteditable');
      /* must be in asynchronous mode */

      setTimeout(() => setCurrentEditableButton(null), 250);
      setTasks(todos);
      localStorage.setItem('tasks', JSON.stringify(todos));
    }
  };
  /**
   * @function editableTaskIn - removing an 'contenteditable' attribute
   * from one of two elements. Depends on which element is in focus.
   * If the timer is active, deletes it because the item is in edit mode
   * удаляет атрибут 'contenteditable' у одного из двух элементов
   * также сбрасывает таймер, который должен был удалить тот же атрибут
   * @param {HTMLElement} target - 'span' or 'p' element (heading or content)
   * элемент 'span' или 'p' заголовка или контента задачи
   * CHANGE STATE: setCurrentEditableButton, setContentBeforeEdit
   * EVENT: onFocus
   * */


  const editableTaskIn = ({
    target
  }) => {
    const {
      heading,
      content
    } = editableContent;

    if (target === heading || target === content) {
      const parent = target.closest('[data-identify]');
      const editBtn = parent.querySelector('[data-interface="edit"]');
      setContentBeforeEdit({
        title: heading.textContent,
        description: content.textContent
      });
      setCurrentEditableButton(editBtn);

      if (toggleEditableAttributeTimer) {
        clearTimeout(toggleEditableAttributeTimer);
      }

      if (target === heading) {
        content.removeAttribute('contenteditable');
      }

      if (target === content) {
        heading.removeAttribute('contenteditable');
      }
    }
  };
  /**
   * @function editableTaskEntry - adding an 'contenteditable' attribute
   * when will the double click happen. If the task is completed, editing is not allowed.
   * добавляет атрибут 'contenteditable' при двойном клике на элементе 'span' или 'p'
   * @param {(HTMLElement|any)} target -  expected 'span' or 'p' element (heading or content)
   * ожидается 'span' или 'p' элементы (заголовок и описание)
   * EVENT: onDoubleClick
   * */


  const editableTaskEntry = ({
    target
  }) => {
    const isEditableContent = target.hasAttribute('data-edit');
    const task = target.closest('[data-identify]');
    const editAllow = !(task !== null && task !== void 0 && task.classList.contains('task-complete'));

    if (isEditableContent && editAllow) {
      const [heading, content] = setEditable(target);
      const isHeading = target.getAttribute('data-edit') === 'heading';
      const isContent = target.getAttribute('data-edit') === 'content';

      if (isHeading) {
        heading.setAttribute('contenteditable', 'true');
        heading.focus();
      }

      if (isContent) {
        content.setAttribute('contenteditable', 'true');
        content.focus();
      }
    }
  };
  /**
   * @function editableTaskExit - removing an 'contenteditable' attribute
   * when pressing the Enter key.
   * удаляет атрибут 'contenteditable' когда была нажата клавиша Enter
   * @param {HTMLElement} target - 'span' or 'p' element (heading or content)
   * заголовок или описание
   * @param {string} code - code of current Key
   * код клавиши
   * @param {boolean} shiftKey - determines whether the 'shift' key has been pressed
   * была ли зажата клавиша 'shift'
   * EVENT: onKeyDown
   * */


  const editableTaskExit = ({
    target,
    code,
    shiftKey
  }) => {
    const {
      heading,
      content
    } = editableContent;
    const targetIsEditable = target === heading || target === content;

    if (targetIsEditable && code === 'Enter' && !shiftKey) {
      heading.removeAttribute('contenteditable');
      content.removeAttribute('contenteditable');
    }
  };
  /*
   * Task button events
   * события интерфейса задания (важно, удалить, выполнено, редактировать)
   */

  /**
   * @function onImportant - marks the task as important/unimportant
   * устанавливает задание как важное
   * @param {HTMLElement} target - button of task (important)
   * кнопка задания (важно)
   * CHANGE STATE: tasks
   * SET STORAGE: tasks
   * */


  const onImportant = ({
    target
  }) => {
    const {
      heading,
      content
    } = editableContent;
    const parent = target.closest('[data-identify]');
    const id = Number(parent.getAttribute('data-identify'));
    const todos = [...tasks].map(task => {
      /* if the displayed tasks are important, hide them */
      const hidden = filterButton === 'important';

      if (task.id === id) {
        Object.assign(task, {
          important: !task.important,
          hidden
        });
      }

      return task;
    });
    setTasks(todos);
    localStorage.setItem('tasks', JSON.stringify(todos));
    /* if only important tasks are displayed at the moment */

    if (filterButton === 'important') {
      /* is there at least one with a flag important: true */
      const areThereImportantTasks = todos.some(task => task.important === true);
      /* if not, call the function showActiveTasks and show all active tasks */

      if (!areThereImportantTasks) {
        showActiveTasks({
          target: activeButton
        });
      }
    }
    /* delete contenteditable attribute (this may be useful) */


    heading === null || heading === void 0 ? void 0 : heading.removeAttribute('contenteditable');
    content === null || content === void 0 ? void 0 : content.removeAttribute('contenteditable');
  };
  /**
   * @function onCompleted - marks the task as completed/unfinished
   * устанавливает задание как завершенное
   * @param {HTMLElement} target - button of task (completed)
   * кнопка задания (завершено)
   * CHANGE STATE: tasks
   * SET STORAGE: tasks
   * */


  const onCompleted = ({
    target
  }) => {
    const {
      heading,
      content
    } = editableContent;
    const parent = target.closest('[data-identify]');
    const id = Number(parent.getAttribute('data-identify'));
    const todos = [...tasks].map(task => {
      /* if the displayed tasks are important, hide them */
      const isCompletedGroupDisplay = filterButton === 'completed';
      const isActiveGroupDisplay = filterButton === 'active';
      const hidden = isCompletedGroupDisplay || isActiveGroupDisplay;

      if (task.id === id) {
        Object.assign(task, {
          completed: !task.completed,
          important: false,
          hidden
        });
      }

      return task;
    });
    setTasks(todos);
    localStorage.setItem('tasks', JSON.stringify(todos));
    /* if only completed tasks are displayed at the moment */

    if (filterButton === 'completed') {
      /* is there at least one with a flag completed: true */
      const areThereCompletedTasks = todos.some(task => task.completed === true);
      /* if not, call the function showActiveTasks and show all active tasks */

      if (!areThereCompletedTasks) {
        showActiveTasks({
          target: activeButton
        });
      }
    }
    /* delete contenteditable attribute (this may be useful) */


    heading === null || heading === void 0 ? void 0 : heading.removeAttribute('contenteditable');
    content === null || content === void 0 ? void 0 : content.removeAttribute('contenteditable');
  };
  /**
   * @function onDelete - removes a task from the application
   * удаляет задание
   * @param {HTMLElement} target - button of task (deleted)
   * кнопка задания (удалить)
   * CHANGE STATE: tasks
   * SET STORAGE: tasks, toasts
   * */


  const onDeleted = ({
    target
  }) => {
    const {
      heading,
      content
    } = editableContent;
    const parent = target.closest('[data-identify]');
    const id = Number(parent.getAttribute('data-identify'));
    const todos = [...tasks].filter(({
      id: taskID
    }) => taskID !== id);
    setTasks(todos);
    localStorage.setItem('tasks', JSON.stringify(todos));
    /* if only completed tasks are displayed at the moment */

    if (filterButton === 'completed') {
      /* is there at least one with a flag completed: true */
      const areThereCompletedTasks = todos.some(task => task.completed === true);
      /* if not, call the function showActiveTasks and show all active tasks */

      if (!areThereCompletedTasks) {
        showActiveTasks({
          target: activeButton
        });
      }
    }
    /* if only important tasks are displayed at the moment */


    if (filterButton === 'important') {
      /* is there at least one with a flag important: true */
      const areThereImportantTasks = todos.some(task => task.important === true);
      /* if not, call the function showActiveTasks and show all active tasks */

      if (!areThereImportantTasks) {
        showActiveTasks({
          target: activeButton
        });
      }
    }
    /* delete contenteditable attribute (this may be useful) */


    heading === null || heading === void 0 ? void 0 : heading.removeAttribute('contenteditable');
    content === null || content === void 0 ? void 0 : content.removeAttribute('contenteditable');
    /* show message */

    const messages = [...toasts];
    messages.push({
      title: language === 'ru' ? 'Задание удалено' : 'Task deleted',
      description: language === 'ru' ? 'Удаление прошло успешно' : 'The deletion was successful',
      classes: 'bg-success text-light',
      status: language === 'ru' ? 'Успех' : 'Success',
      id: messages.length + 1
    });
    setToasts(messages);
  };
  /**
   * @function onEdit - edits a task
   * устанавливает задание как редактируемое
   * @param {HTMLElement} target - button of task (editing)
   * кнопка задания (редактировать)
   * Clears the previous timeout and sets a new timer
   * CHANGE STATE: currentEditableButton
   * */


  const onEditing = ({
    target
  }) => {
    const [heading, content] = setEditable(target);

    if (currentEditableButton === target) {
      setCurrentEditableButton(null);
      return;
    }

    clearTimeout(toggleEditableAttributeTimer);
    toggleEditableAttributeTimer = setTimeout(() => deleteContenteditableAttr(heading, content), 4000);
    content.toggleAttribute('contenteditable');
    heading.toggleAttribute('contenteditable');
  };
  /* Events for tasks */


  const taskBtnEvents = {
    onImportant,
    onCompleted,
    onDeleted,
    onEditing
  };
  const taskCardEvents = {
    editableTaskIn,
    editableTaskOut
  };
  const taskCardAdd = {
    editableTaskEntry,
    editableTaskExit
  };
  const taskEvents = { ...taskBtnEvents,
    ...taskCardEvents,
    ...taskCardAdd,
    setEditable
  };
  /* Adding events to switch tasks */

  const taskStatus = {
    showAllTasks,
    showActiveTasks
  };
  const taskStatusAdd = {
    showCompletedTasks,
    showImportantTasks
  };
  const taskToggle = { ...taskStatus,
    ...taskStatusAdd
  };
  /* Events for sending a task */

  const submitInputEvents = {
    onInputTitle,
    onInputDescription,
    onDeadlineEnable
  };
  const submitCheckboxEvents = {
    onChangeImportant,
    onChangeCompleted
  };
  const submitEvents = { ...submitInputEvents,
    ...submitCheckboxEvents
  };
  /* State for inputs and checkboxes */

  const submitInputState = {
    submitTitle,
    submitDescription,
    handleDateChange,
    selectedDate
  };
  const submitCheckboxState = {
    submitImportant,
    submitCompleted,
    submitDeadline
  };
  const submitState = { ...submitInputState,
    ...submitCheckboxState
  };
  const submit = {
    addTask,
    ...submitEvents,
    ...submitState,
    sendValidation
  };
  /* State and events for search tasks */

  const search = {
    searchTasks,
    searchTasksValue
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(language_language.Provider, {
    value: language
  }, /*#__PURE__*/react.createElement(components_header, {
    onChangeTheme: onChangeTheme,
    theme: theme,
    setLanguage: setLanguage
  }), /*#__PURE__*/react.createElement(components_todo_list, {
    taskEvents: taskEvents,
    taskToggle: taskToggle,
    search: search,
    submit: submit,
    tasks: tasks,
    theme: theme
  }), /*#__PURE__*/react.createElement(components_footer, {
    theme: theme
  }), /*#__PURE__*/react.createElement(messanges, {
    toasts: toasts,
    setToasts: setToasts
  })));
};

/* harmony default export */ var components_App = (App);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 55 modules
var bootstrap_esm = __webpack_require__(5169);
;// CONCATENATED MODULE: ./src/javascript/library/bootstrap/js/bootstrap.js

/* harmony default export */ var bootstrap = ({
  Collapse: bootstrap_esm/* Collapse */.UO
});
;// CONCATENATED MODULE: ./src/javascript/library/bootstrap/js/index.js

;// CONCATENATED MODULE: ./src/javascript/library/bootstrap/index.js


;// CONCATENATED MODULE: ./src/javascript/library/index.js

;// CONCATENATED MODULE: ./src/javascript/main.js






react_dom.render( /*#__PURE__*/react.createElement(components_App, null), document.getElementById('root'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list_javascript"] = self["webpackChunktodo_list_javascript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [17], function() { return __webpack_require__(6981); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [17], function() { return __webpack_require__(8858); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbnRleHQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvaW5mb3JtYXRpb24vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbmZvcm1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL2ludGVyZmFjZXMvY2hhbmdlLXRoZW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvaW50ZXJmYWNlcy9jaGFuZ2UtbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbnRlcmZhY2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9tb2RhbC9tb2RhbC1lbnRyeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL21vZGFsL21vZGFsLXJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vdG9nZ2xlL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvY29tbW9uL3RvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvY29tbW9uL21lc3Nhbmdlcy9tZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vbWVzc2FuZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vbWVzc2FuZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9mdW5jdGlvbnMvdGhlbWVzL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2Z1bmN0aW9ucy90aGVtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2J1dHRvbnMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3QvdGFza3MvZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3QvdGFza3MvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvbWF0ZXJpYWwtdWktcGlja2Vycy9tYXRlcmlhbC11aS1waWNrZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvbGlicmFyeS9tYXRlcmlhbC11aS1waWNrZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VuZC9zZW5kLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2NvdW50ZXIvY291bnRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2NvdW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC9maWx0ZXIvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2ZpbHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvYm9vdHN0cmFwL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkxhbmd1YWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUaXRsZSIsImxhbmd1YWdlIiwidXNlQ29udGV4dCIsIkNoYW5nZVRoZW1lIiwib25DaGFuZ2VUaGVtZSIsInRoZW1lIiwiQ2hhbmdlTGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImNoYW5nZUxhbmd1YWdlIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwiTW9kYWwiLCJNb2RhbEVudHJ5IiwiTW9kYWxSZWdpc3RyYXRpb24iLCJUb2dnbGUiLCJ0ZXh0IiwiYXJpYUxhYmVsIiwiaWNvbiIsIk1lc3NhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2xhc3NlcyIsInN0YXR1cyIsInBvcFVwIiwic2V0VG9hc3RzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50IiwiY2xvc2VzdCIsInJlbW92ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJxdWFudGl0eSIsImNoaWxkRWxlbWVudENvdW50IiwiY2xlYXJJbnRlcnZhbCIsImxhc3RNZXNzYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGQiLCJzZXRUaW1lb3V0IiwiTWVzc2FnZXMiLCJ0b2FzdHMiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlcyIsIm1hcCIsInRvYXN0IiwiaWQiLCJ0aGVtZXMiLCJjb21wb25lbnQiLCJ0YXNrU3RhdGUiLCJjb21wbGV0ZWQiLCJpbXBvcnRhbnQiLCJBcnJheSIsImlzQXJyYXkiLCJIZWFkZXIiLCJCdXR0b25zIiwidGFza1RvZ2dsZSIsInRhc2tzIiwic2hvd0FsbFRhc2tzIiwic2hvd0ltcG9ydGFudFRhc2tzIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInNvbWUiLCJ0YXNrIiwic2hvd0NvbXBsZXRlZFRhc2tzIiwic2hvd0FjdGl2ZVRhc2tzIiwiU2VhcmNoIiwic2VhcmNoIiwic2VhcmNoVGFza3MiLCJzZWFyY2hUYXNrc1ZhbHVlIiwiRGVzY3JpcHRpb24iLCJjcmVhdGVkIiwiZGVhZGxpbmUiLCJJbnRlcmZhY2UiLCJ0YXNrRXZlbnRzIiwiaXNJbXBvcnRhbnQiLCJpc0NvbXBsZXRlZCIsInRleHRGb3JJbXBvcnRhbnRCdG4iLCJ0ZXh0Rm9yQ29tcGxldGVkQnRuIiwib25JbXBvcnRhbnQiLCJvbkNvbXBsZXRlZCIsIm9uRWRpdGluZyIsIm9uRGVsZXRlZCIsIlRhc2siLCJoaWRkZW4iLCJjbGFzc2VzV2l0aFRoZW1lIiwiVGFza3MiLCJzZXRFZGl0YWJsZSIsImVkaXRhYmxlVGFza0luIiwiZWRpdGFibGVUYXNrT3V0IiwiZWRpdGFibGVUYXNrRXhpdCIsImVkaXRhYmxlVGFza0VudHJ5IiwibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInJ1IiwicnVMb2NhbGUiLCJTZW5kIiwic3VibWl0Iiwic2VsZWN0ZWREYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkRlYWRsaW5lIiwiRGF0ZUZuc1V0aWxzIiwib25JbnB1dFRpdGxlIiwic3VibWl0VGl0bGUiLCJvbklucHV0RGVzY3JpcHRpb24iLCJzdWJtaXREZXNjcmlwdGlvbiIsIm9uQ2hhbmdlSW1wb3J0YW50Iiwic3VibWl0SW1wb3J0YW50Iiwib25DaGFuZ2VDb21wbGV0ZWQiLCJzdWJtaXRDb21wbGV0ZWQiLCJvbkRlYWRsaW5lRW5hYmxlIiwic3VibWl0RGVhZGxpbmUiLCJhZGRUYXNrIiwiQ291bnRlciIsImZpbHRlciIsIkZpbHRlcnMiLCJUb2RvTGlzdCIsIkZvb3RlciIsIkFwcCIsImRlZmF1bHRUYXNrIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsImRlYWRsaW5lU2V0dGluZ0JlZm9yZVJlbmRlciIsImRlYWRsaW5lVGltZVN0YW1wIiwiY3VycmVudFRpbWVzdGFtcCIsIkRhdGUiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5c0xlZnQiLCJob3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNlY29uZHNMZWZ0Iiwic2V0VGFza3MiLCJPYmplY3QiLCJhc3NpZ24iLCJzZW5kQnV0dG9uIiwic2V0U2VuZEJ1dHRvbiIsImFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsInN1Ym1pdFRpdGxlRWxlbWVudCIsInNldFN1Ym1pdFRpdGxlRWxlbWVudCIsInN1Ym1pdERlc2NFbGVtZW50Iiwic2V0U3VibWl0RGVzY0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlYWRsaW5lcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudGRvd24iLCJmb3JFYWNoIiwiZGVhZExpbmUiLCJkYXlzIiwidGV4dENvbnRlbnQiLCJ0cmltIiwic3BsaXQiLCJ4IiwicGFyc2VJbnQiLCJ0aW1lcklzQWN0aXZlIiwic2V0U3VibWl0VGl0bGUiLCJzZXRTdWJtaXREZXNjcmlwdGlvbiIsInNldFN1Ym1pdEltcG9ydGFudCIsInNldFN1Ym1pdENvbXBsZXRlZCIsInNldFN1Ym1pdERlYWRsaW5lIiwiZWRpdGFibGVDb250ZW50Iiwic2V0RWRpdGFibGVDb250ZW50IiwiY3VycmVudEVkaXRhYmxlQnV0dG9uIiwic2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uIiwidG9nZ2xlRWRpdGFibGVBdHRyaWJ1dGVUaW1lciIsImZpbHRlckJ1dHRvbiIsInNldEZpbHRlckJ1dHRvbiIsInNldFNlYXJjaFRhc2tzVmFsdWUiLCJzZW5kaW5nRGF0YUlzVmFsaWQiLCJzZXRTZW5kaW5nRGF0YUlzVmFsaWQiLCJjb250ZW50QmVmb3JlRWRpdCIsInNldENvbnRlbnRCZWZvcmVFZGl0IiwidG9kb3MiLCJtYXRjaENvbnRlbnQiLCJ3b3JkIiwicmVnZXhwIiwiUmVnRXhwIiwibWF0Y2hlcyIsInZhbCIsIm1hdGNoIiwic2V0QnV0dG9uQXNBY3RpdmUiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImJ1dHRvbiIsInNhbWVGaWx0ZXJUeXBlIiwiYWxsIiwidG9kbyIsImFjdGl2ZSIsImNvbXBsZXRlIiwic2VuZFZhbGlkYXRpb24iLCJjaGVja2VkIiwidmFsaWRhdGUiLCJjb250ZW50Iiwic3RyaWN0IiwicGF0dGVybiIsImhhdmVJbmNvcnJlY3RTeW1ib2xzIiwicmVzdWx0IiwicmVwbGFjZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwiZm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZvcm1hdCIsImRlYWRsaW5lVGltZXN0YW1wIiwiZ2V0VHlwZU9mRmlsdGVyIiwiaXNBY3RpdmUiLCJhZGRlZCIsImdldFRpbWUiLCJwdXNoIiwiY2xpY2siLCJzdHJpbmdpZnkiLCJoZWFkaW5nIiwicHJldlN0YXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZGVsZXRlQ29udGVudGVkaXRhYmxlQXR0ciIsInByZXZIZWFkaW5nIiwicHJldkNvbnRlbnQiLCJpc0VkaXRpbmdUYXNrU3VjY2Vzc2Z1bGx5IiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwidGl0bGVJc1NhbWUiLCJkZXNjcmlwdGlvbklzU2FtZSIsImN1cnJlbnQiLCJOdW1iZXIiLCJlZGl0QnRuIiwiY2xlYXJUaW1lb3V0IiwiaXNFZGl0YWJsZUNvbnRlbnQiLCJoYXNBdHRyaWJ1dGUiLCJlZGl0QWxsb3ciLCJpc0hlYWRpbmciLCJpc0NvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImNvZGUiLCJzaGlmdEtleSIsInRhcmdldElzRWRpdGFibGUiLCJhcmVUaGVyZUltcG9ydGFudFRhc2tzIiwiaXNDb21wbGV0ZWRHcm91cERpc3BsYXkiLCJpc0FjdGl2ZUdyb3VwRGlzcGxheSIsImFyZVRoZXJlQ29tcGxldGVkVGFza3MiLCJ0YXNrSUQiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0YXNrQnRuRXZlbnRzIiwidGFza0NhcmRFdmVudHMiLCJ0YXNrQ2FyZEFkZCIsInRhc2tTdGF0dXMiLCJ0YXNrU3RhdHVzQWRkIiwic3VibWl0SW5wdXRFdmVudHMiLCJzdWJtaXRDaGVja2JveEV2ZW50cyIsInN1Ym1pdEV2ZW50cyIsInN1Ym1pdElucHV0U3RhdGUiLCJzdWJtaXRDaGVj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RXBGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQ2hEQTtVQUNBO1VBQ0E7VUFDQSxtREFBbUQsa0NBQWtDLEVBQUU7VUFDdkYsNkVBQTZFLGtDQUFrQyxFQUFFO1VBQ2pIIiwiZmlsZSI6Im1haW4uYTY2MmNkYzllMGM3NTJiNTQ3OTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlQ29udGV4dDtcclxuIiwiaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7IExhbmd1YWdlQ29udGV4dCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgVGl0bGUgLSBTaG93IGEgZ3JlZXRpbmcgYW5kIHVzZXIgbmFtZVxuICogKi9cblxuY29uc3QgVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi1oZWFkaW5nIHBlLTJcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JzQtdC90LXQtNC20LXRgCDQt9Cw0LTQsNGHJyA6ICdUYXNrIG1hbmFnZXInfVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWpvdXJuYWxzIHBzLTEgZC1ub25lIGQtc20taW5saW5lXCI+IDwvaT5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLWhlYWRpbmctdXNlciBkLWJsb2NrIHBlLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQlNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMINC90LAg0YHQsNC50YInIDogJ1dlbGNvbWUgdG8gc2l0ZSd9eycgJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcclxuXHJcbmV4cG9ydCB7IFRpdGxlIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBDaGFuZ2VUaGVtZSAtIENoYW5nZSB0aGVtZSBvbiBzaXRlXG4gKiAqL1xuXG5jb25zdCBDaGFuZ2VUaGVtZSA9ICh7IG9uQ2hhbmdlVGhlbWUsIHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJbIGNvbC0xMiBjb2wtbWQtNCBdIG1iLTJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hhbmdlLXRoZW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBsYWJlbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Ch0LzQtdC90LAg0YLQtdC80YsnIDogJ0NoYW5nZSB0aGVtZSd9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoZW1lfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cbiAgICAgICAgICAgICAgICBpZD1cImNoYW5nZS10aGVtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPntsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQodCy0LXRgtC70LDRjyDRgtC10LzQsCcgOiAnTGlnaHQgdGhlbWUnfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+e2xhbmd1YWdlID09PSAncnUnID8gJ9Ci0LXQvNC90LDRjyDRgtC10LzQsCcgOiAnRGFyayB0aGVtZSd9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lb25cIj57bGFuZ3VhZ2UgPT09ICdydScgPyAn0J3QtdC+0L3QvtCy0LDRjyDRgtC10LzQsCcgOiAnTmVvbiB0aGVtZSd9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdvbGRcIj57bGFuZ3VhZ2UgPT09ICdydScgPyAn0JfQvtC70L7RgtCw0Y8g0YLQtdC80LAnIDogJ0dvbGQgdGhlbWUnfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbWVyYWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQmNC30YPQvNGA0YPQtNC90LDRjyDRgtC10LzQsCcgOiAnRW1lcmFsZCB0aGVtZSd9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZVRoZW1lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IENoYW5nZUxhbmd1YWdlIC0gQ2hhbmdlIGxhbmd1YWdlIG9uIHNpdGVcbiAqICovXG5cbmNvbnN0IENoYW5nZUxhbmd1YWdlID0gKHsgc2V0TGFuZ3VhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIHZhbHVlKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UodmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiWyBjb2wtMTIgY29sLW1kLTQgXSBtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoYW5nZS1sYW5ndWFnZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgbGFiZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQodC80LXQvdCwINGP0LfRi9C60LAnIDogJ0NoYW5nZSBsYW5ndWFnZSd9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBjaGFuZ2VMYW5ndWFnZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsYW5ndWFnZSA9PT0gJ3J1JyA/ICdydScgOiAnZW4nfVxuICAgICAgICAgICAgICAgIGlkPVwiY2hhbmdlLWxhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1XCI+0KDRg9GB0YHQutC40Lk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW5cIj5FbmdsaXNoPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZUxhbmd1YWdlO1xuIiwiaW1wb3J0IENoYW5nZVRoZW1lIGZyb20gJy4vY2hhbmdlLXRoZW1lJztcbmltcG9ydCBDaGFuZ2VMYW5ndWFnZSBmcm9tICcuL2NoYW5nZS1sYW5ndWFnZSc7XG5cbmV4cG9ydCB7IENoYW5nZVRoZW1lLCBDaGFuZ2VMYW5ndWFnZSB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IE1vZGFsIC0gTW9kYWwgd2luZG93IGZvciBhdXRoZW50aWNhdGlvbiBvciByZWdpc3RyYXRpb25cclxuICogKi9cclxuXHJcbmNvbnN0IE1vZGFsID0gKHsgdGhlbWUgfSkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwgdGV4dC1ib2R5XCIgdGFiSW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSBtb2RhbC1mdWxsc2NyZWVuLXNtLWRvd25cIj5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdtb2RhbC1jb250ZW50IGJnLWRhcmsgdGV4dC1saWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnbW9kYWwtY29udGVudCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0L3QsCDRgdCw0LnRgtC1PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1jbG9zZSBidG4tY2xvc2Utd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYnRuLWNsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0JfQsNC60YDRi9GC0Ywg0L7QutC90L5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQkNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj9C8INC00L7RgdGC0YPQv9C10L0g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDRhNGD0L3QutGG0LjQvtC90LDQuy4g0J3QsNGB0YLRgNC+0LnQutCwINC/0YDQuNC+0YDQuNGC0LXRgtC90L7RgdGC0Lgg0LfQsNC00LDRhyxcclxuICAgICAgICAgICAgICAgICAgICAgICAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQt9Cw0LTQsNGHLCDQtNC10LTQu9Cw0LnQvSDQtNC70Y8g0YHQv9C40YHQutCwINC30LDQtNCw0YcsINC00L7RgdGC0YPQvyDRgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQu9GO0LHQvtCz0L4g0YPRgdGC0YDQvtC50YHRgtCy0LAsINC40L3RgtC10YDQtdGB0L3Ri9C1INGC0LXQvNGLINC00LvRjyDQv9GA0LjQu9C+0LbQtdC90LjRjyDQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1IVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JLRiyDQvNC+0LbQtdGC0LUg0L/RgNC+0LTQvtC70LbQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINGB0LDQudGC0L7QvCDQsdC10LdcclxuICAgICAgICAgICAgICAgICAgICAgICAg0LDQstGC0L7RgNC40LfQsNGG0LjQuCwg0L3QviDQsiDRgtCw0LrQvtC8INGB0LvRg9GH0LDQtSDQstCw0YjQuCDQtNCw0L3QvdGL0LUg0LHRg9C00YPRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICDRhdGA0LDQvdC40YLRjNGB0Y8g0L3QsCDQu9C+0LrQsNC70YzQvdC+0Lwg0YPRgdGC0YDQvtC50YHRgtCy0LUuINCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0LJcclxuICAgICAgICAgICAgICAgICAgICAgICAg0YHQu9GD0YfQsNC1INC30LDRhdC+0LTQsCDQvdCwINGB0LDQudGCINGBINC00YDRg9Cz0L7Qs9C+INGD0YHRgtGA0L7QudGB0YLQstCwINC+0L3QuCDQsdGD0LTRg9GCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC90LXQtNC+0YHRgtGD0L/QvdGLINC00LvRjyDQstCw0YFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLRgtC+0YDQuNC30YPQudGC0LXRgdGMINC90LAg0YHQsNC50YLQtSDQuCDQv9C+0LvRg9GH0LjRgtC1INC/0L7Qu9C90YvQuSDQtNC+0YHRgtGD0L8g0LpcclxuICAgICAgICAgICAgICAgICAgICAgICAg0L/RgNC40LvQvtC20LXQvdC40Y4hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCt0YLQviDQt9Cw0LnQvNC10YIg0L/QsNGA0YMg0LzQuNC90YPRgi4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1vZGFsPVwiY29udGludWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tb2RhbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCX0LDQutGA0YvRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnQgTW9kYWxFbnRyeSAtIExvZyBpbiB0byB0aGUgYXBwXHJcbiAqICovXHJcblxyXG5jb25zdCBNb2RhbEVudHJ5ID0gKHsgdGhlbWUgfSkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwgdGV4dC1ib2R5XCIgdGFiSW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSBtb2RhbC1mdWxsc2NyZWVuLXNtLWRvd25cIj5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdtb2RhbC1jb250ZW50IGJnLWRhcmsgdGV4dC1saWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnbW9kYWwtY29udGVudCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0L3QsCDRgdCw0LnRgtC1PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1jbG9zZSBidG4tY2xvc2Utd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYnRuLWNsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0JfQsNC60YDRi9GC0Ywg0L7QutC90L5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiYXV0aGVudGljYXRpb24tbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCt0LvQtdC60YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXV0aGVudGljYXRpb24tbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhdXRoZW50aWNhdGlvbi1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRoZW50aWNhdGlvbi1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INCy0LDRiCDQv9Cw0YDQvtC70YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlQ2hlY2sxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZXhhbXBsZUNoZWNrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC/0L7QvNC90LjRgtGMINC80LXQvdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tb2RhbC1lbnRyeT1cImF1dGhlbnRpY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXMtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWVudHJ5PVwicmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsRW50cnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBNb2RhbEVudHJ5IC0gUmVnaXN0cmF0aW9uIGluIHRoZSBhcHBcclxuICogKi9cclxuXHJcbmNvbnN0IE1vZGFsUmVnaXN0cmF0aW9uID0gKHsgdGhlbWUgfSkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwgdGV4dC1ib2R5XCIgdGFiSW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSBtb2RhbC1mdWxsc2NyZWVuLXNtLWRvd25cIj5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUgPT09ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdtb2RhbC1jb250ZW50IGJnLWRhcmsgdGV4dC1saWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnbW9kYWwtY29udGVudCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLWNsb3NlIGJ0bi1jbG9zZS13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdidG4tY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQl9Cw0LrRgNGL0YLRjCDQvtC60L3QvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpc3RyYXRpb24tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnaXN0cmF0aW9uLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVnaXN0cmF0aW9uLXN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCk0LDQvNC40LvQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnaXN0cmF0aW9uLXN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQstCw0YjRgyDRhNCw0LzQuNC70LjRjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpc3RyYXRpb24tZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCt0LvQtdC60YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnaXN0cmF0aW9uLWVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INCy0LDRiCDQv9Cw0YDQvtC70YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkLXJlcGVhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtCy0YLQvtGA0LjRgtC1INC/0LDRgNC+0LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZC1yZXBlYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZC1yZXBlYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70Ywg0L/QvtCy0YLQvtGA0L3QvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJlZ2lzdHJhdGlvbj1cInJlZ2lzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFJlZ2lzdHJhdGlvbjtcclxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxFbnRyeSBmcm9tICcuL21vZGFsLWVudHJ5JztcclxuaW1wb3J0IE1vZGFsUmVnaXN0cmF0aW9uIGZyb20gJy4vbW9kYWwtcmVnaXN0cmF0aW9uJztcclxuXHJcbmV4cG9ydCB7IE1vZGFsLCBNb2RhbEVudHJ5LCBNb2RhbFJlZ2lzdHJhdGlvbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnQgVG9nZ2xlIC0gQSBjb21tb24gY29tcG9uZW50LiBJdCBzd2l0Y2hlcyBjb250ZW50IGhpZGluZyB0byBkaXNwbGF5XHJcbiAqICovXHJcblxyXG5jb25zdCBUb2dnbGUgPSAoeyB0ZXh0LCB0YXJnZXQsIGFyaWFMYWJlbCwgaWNvbiB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2dnbGUtY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PXt0YXJnZXR9XHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGJpICR7aWNvbn1gfT4gPC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcy0yXCI+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xyXG4iLCJpbXBvcnQgVG9nZ2xlIGZyb20gJy4vdG9nZ2xlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNsYXNzZXMsIHN0YXR1cyB9KSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzfSB0b2FzdCBzaG93aW5nYH1cclxuICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiXHJcbiAgICAgICAgYXJpYS1hdG9taWM9XCJ0cnVlXCJcclxuICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIm1lLWF1dG9cIj57dGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3N0YXR1c308L3NtYWxsPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi0JfQsNC60YDRi9GC0YxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWJvZHlcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uIHBvcFVwIC0gY29uZmlndXJpbmcgdGhlIGxpZmV0aW1lIG9mIHBvcC11cCBtZXNzYWdlc1xyXG4gKiDQvdCw0YHRgtGA0L7QudC60LAg0LLRgNC10LzQtdC90Lgg0LbQuNC30L3QuCDQstGB0L/Qu9GL0LLQsNGO0YnQuNGFINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzZXRUb2FzdHMgLSBzdGF0ZSBvZiBjdXJyZW50IHBvcC11cCBtZXNzYWdlc1xyXG4gKiDRgdC+0YHRgtC+0Y/QvdC40LUg0YLQtdC60YPRidC40YUg0LLRgdC/0LvRi9Cy0LDRjtGJ0LjRhSDRgdC+0L7QsdGJ0LXQvdC40LlcclxuICogKi9cclxuXHJcbmNvbnN0IHBvcFVwID0gKHNldFRvYXN0cykgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNsb3NlJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LmNsb3Nlc3QoJy50b2FzdCcpO1xyXG4gICAgICAgICAgICBwYXJlbnQ/LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgaWYgKCFxdWFudGl0eSkge1xyXG4gICAgICAgICAgICBzZXRUb2FzdHMoW10pO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IGNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBsYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1oaWRkZW4nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxhc3RNZXNzYWdlPy5yZW1vdmUoKSwgMTAwMCk7XHJcbiAgICB9LCA1MDAwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb24gTWVzc2FnZXMgLSBjcmVhdGUgcG9wLXVwIG1lc3NhZ2VzXHJcbiAqINGB0L7Qt9C00LDQtdGCINCy0YHQv9C70YvQstCw0Y7RidC40LUg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHRvYXN0cyAtIGN1cnJlbnQgcG9wLXVwIG1lc3NhZ2VzXHJcbiAqINGC0LXQutGD0YnQuNC1INCy0YHQv9C70YvQstCw0Y7RidC40LUg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNldFRvYXN0cyAtIGN1cnJlbnQgc3RhdGUgcG9wLXVwIG9mIG1lc3NhZ2VzXHJcbiAqINGB0L7RgdGC0L7Rj9C90LjQtSDRgtC10LrRg9GJ0LjRhSDQstGB0L/Qu9GL0LLQsNGO0YnQuNGFINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gKiAqL1xyXG5cclxuY29uc3QgTWVzc2FnZXMgPSAoeyB0b2FzdHMsIHNldFRvYXN0cyB9KSA9PiB7XHJcbiAgICBpZiAoIXRvYXN0cy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiBwb3BVcChzZXRUb2FzdHMpLCBbXSk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0b2FzdHMubWFwKCh0b2FzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjbGFzc2VzLCBzdGF0dXMsIGlkIH0gPSB0b2FzdDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGFpbmVyIHBvc2l0aW9uLWZpeGVkIGJvdHRvbS0wIGVuZC0wIHAtM1wiPnttZXNzYWdlc308L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcztcclxuIiwiaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7XHJcbiIsImltcG9ydCBUb2dnbGUgZnJvbSAnLi90b2dnbGUnO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9tZXNzYW5nZXMnO1xyXG5cclxuZXhwb3J0IHsgVG9nZ2xlLCBNZXNzYWdlcyB9O1xyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIHRoZW1lcyAtIGNoYW5naW5nIHRoZW1lcyBmb3IgdGhlIGFwcFxyXG4gKiBAcGFyYW0geyBzdHJpbmcgfSBjb21wb25lbnQgLSBjb21wb25lbnQgbmFtZVxyXG4gKiBAcGFyYW0geyBzdHJpbmcgfSB0aGVtZSAtIGN1cnJlbnQgdGhlbWVcclxuICogQHBhcmFtIHsgc3RyaW5nIH0gdmFsdWUgLSBjbGFzc2VzIGZvciBjb21wb25lbnRcclxuICogQHBhcmFtIHsgKEFycmF5fG51bGwpIH0gdGFza1N0YXRlIC0gYXJyYXkgd2l0aCBzdGF0ZSBvZiB0YXNrcyAob3B0aW9uYWwpXHJcbiAqICovXHJcblxyXG5jb25zdCB0aGVtZXMgPSAoY29tcG9uZW50LCB0aGVtZSwgdmFsdWUsIHRhc2tTdGF0ZSA9IG51bGwpID0+IHtcclxuICAgIGxldCBjb21wbGV0ZWQ7XHJcbiAgICBsZXQgaW1wb3J0YW50O1xyXG4gICAgbGV0IGNsYXNzZXMgPSBgJHt2YWx1ZX0gYDtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhc2tTdGF0ZSkpIHtcclxuICAgICAgICBbY29tcGxldGVkLCBpbXBvcnRhbnRdID0gW3Rhc2tTdGF0ZVswXSwgdGFza1N0YXRlWzFdXTtcclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICdoZWFkZXInKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlbWVyYWxkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWVtZXJhbGQtaGVhZGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb2xkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWdvbGQtaGVhZGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduZW9uJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLW5lb24taGVhZGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWRhcmsnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLXNlY29uZGFyeSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICd0b2RvLWxpc3QnKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlbWVyYWxkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWVtZXJhbGQtdG9kby1saXN0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb2xkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWdvbGQtdG9kby1saXN0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduZW9uJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLW5lb24tdG9kby1saXN0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWRhcmstdG9kby1saXN0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICd0YXNrcycpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtZXJhbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnbGlzdC1pdGVtLWVtZXJhbGQtdGhlbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dvbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnbGlzdC1pdGVtLWdvbGQtdGhlbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25lb24nOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnbGlzdC1pdGVtLW5lb24tdGhlbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhcmsnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnbGlzdC1pdGVtLWRhcmstdGhlbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICd0YXNrJykge1xyXG4gICAgICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZW1lcmFsZCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAndGFzay1pbXBvcnRhbnQgdGFzay1pbXBvcnRhbnQtZW1lcmFsZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnIHRhc2stY29tcGxldGUgdGFzay1jb21wbGV0ZS1lbWVyYWxkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb2xkJzpcclxuICAgICAgICAgICAgICAgIGlmIChpbXBvcnRhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICd0YXNrLWltcG9ydGFudCB0YXNrLWltcG9ydGFudC1nb2xkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICcgdGFzay1jb21wbGV0ZSB0YXNrLWNvbXBsZXRlLWdvbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25lb24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKGltcG9ydGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ3Rhc2staW1wb3J0YW50IHRhc2staW1wb3J0YW50LW5lb24nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJyB0YXNrLWNvbXBsZXRlIHRhc2stY29tcGxldGUtbmVvbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAndGFzay1pbXBvcnRhbnQgdGFzay1pbXBvcnRhbnQtZGFyayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnIHRhc2stY29tcGxldGUgdGFzay1jb21wbGV0ZS1kYXJrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaWdodCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAndGFzay1pbXBvcnRhbnQgdGFzay1pbXBvcnRhbnQtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJyB0YXNrLWNvbXBsZXRlIHRhc2stY29tcGxldGUtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcG9uZW50ID09PSAnZm9vdGVyJykge1xyXG4gICAgICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZW1lcmFsZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1lbWVyYWxkLWZvb3Rlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ29sZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1nb2xkLWZvb3Rlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbmVvbic6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1uZW9uLWZvb3Rlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1kYXJrJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdiZy1zZWNvbmRhcnknO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcG9uZW50ID09PSAnaW5mb3JtYXRpb24nIHx8IGNvbXBvbmVudCA9PT0gJ2Fib3V0Jykge1xyXG4gICAgICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZW1lcmFsZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ29sZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWdyb3VwLWl0ZW0td2FybmluZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbmVvbic6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWdyb3VwLWl0ZW0taW5mbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWdyb3VwLWl0ZW0tbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVzO1xyXG4iLCJpbXBvcnQgdGhlbWVzIGZyb20gJy4vdGhlbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lcztcclxuIiwiLypcbiAqIFRoZSBtYWluIGNvbXBvbmVudCBvZiB0aGUgc2l0ZSBoZWFkZXJcbiAqICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL2luZm9ybWF0aW9uJztcbmltcG9ydCB7IENoYW5nZVRoZW1lLCBDaGFuZ2VMYW5ndWFnZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxFbnRyeSwgTW9kYWxSZWdpc3RyYXRpb24gfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFRvZ2dsZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBIZWFkZXIgLSBUaGUgbWFpbiBjb21wb25lbnQgb2YgdGhlIHNpdGUgaGVhZGVyLlxuICogUmVuZGVyOiBUaXRsZSwgQ2hhbmdlVGhlbWUsIENoYW5nZUxhbmd1YWdlLCBBdXRoZW50aWNhdGlvbiwgTW9kYWwsIE1vZGFsRW50cnksIE1vZGFsUmVnaXN0cmF0aW9uXG4gKiAqL1xuXG5jb25zdCBIZWFkZXIgPSAoeyBvbkNoYW5nZVRoZW1lLCB0aGVtZSwgc2V0TGFuZ3VhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGVtZXMoJ2hlYWRlcicsIHRoZW1lLCAndG9kby1oZWFkZXIgY29udGFpbmVyLWZsdWlkIHRleHQtbGlnaHQnKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1peGluLWhlYWRlciBuYXZiYXItZGFyayBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50LXNtLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhbmd1YWdlID09PSAncnUnID8gJ9Cc0LXQvdC10LTQttC10YAg0LfQsNC00LDRhycgOiAnVGFzayBtYW5hZ2VyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIiNoZWFkZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbD1cItCe0YLQutGA0YvRgtGMINC40LvQuCDQt9Cw0LrRgNGL0YLRjCDQvdCw0LLQuNCz0LDRhtC40L7QvdC90L7QtSDQvNC10L3RjiDQsiDRiNCw0L/QutC1INGB0LDQudGC0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm5hdmJhci10b2dnbGVyLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2xsYXBzZVwiIGlkPVwiaGVhZGVyLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxDaGFuZ2VUaGVtZSBvbkNoYW5nZVRoZW1lPXtvbkNoYW5nZVRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgICAgICAgICAgPENoYW5nZUxhbmd1YWdlIHNldExhbmd1YWdlPXtzZXRMYW5ndWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1vZGFsIHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgIDxNb2RhbEVudHJ5IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgIDxNb2RhbFJlZ2lzdHJhdGlvbiB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuY29uc3QgQnV0dG9ucyA9ICh7IHRhc2tUb2dnbGUsIHRhc2tzLCB0ZXh0IH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrVG9nZ2xlLnNob3dBbGxUYXNrc31cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsdGVyIGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgcC0xXCJcbiAgICAgICAgICAgICAgICBkYXRhLWZpbHRlcj1cImFsbFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0YXNrcz8ubGVuZ3RofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fSB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0LLRgdC1JyA6ICdhbGwnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGFza1RvZ2dsZS5zaG93SW1wb3J0YW50VGFza3N9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpbHRlciBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHAtMVwiXG4gICAgICAgICAgICAgICAgZGF0YS1maWx0ZXI9XCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgIShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbLi4udGFza3NdKS5zb21lKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2suaW1wb3J0YW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fSB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0LLQsNC20L3Ri9C1JyA6ICdpbXBvcnRhbnQnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGFza1RvZ2dsZS5zaG93Q29tcGxldGVkVGFza3N9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpbHRlciBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHAtMVwiXG4gICAgICAgICAgICAgICAgZGF0YS1maWx0ZXI9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgIShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbLi4udGFza3NdKS5zb21lKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2suY29tcGxldGVkLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fSB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0LfQsNCy0LXRgNGI0LXQvdC90YvQtScgOiAnY29tcGxldGVkJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Rhc2tUb2dnbGUuc2hvd0FjdGl2ZVRhc2tzfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maWx0ZXIgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBwLTEgYWN0aXZlXCJcbiAgICAgICAgICAgICAgICBkYXRhLWZpbHRlcj1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0YXNrcz8ubGVuZ3RofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fSB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0LDQutGC0LjQstC90YvQtScgOiAnYWN0aXZlJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9ucztcbiIsImltcG9ydCBCdXR0b25zIGZyb20gJy4vYnV0dG9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBTZWFyY2ggLSBGaW5kcyB0YXNrcyBieSBrZXl3b3Jkcy5cbiAqIEFiaWxpdHkgdG8gc2VhcmNoIGFsbCwgaW1wb3J0YW50IG9yIGNvbXBsZXRlZCB0YXNrc1xuICogKi9cblxuY29uc3QgU2VhcmNoID0gKHsgdGFza3MsIHRhc2tUb2dnbGUsIHNlYXJjaCB9KSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiWyBjb2wtMTIgY29sLWxnLTggXSBtYi0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0J/QvtC40YHQuiDQt9Cw0LTQsNGHOicgOiAnVGFzayBTZWFyY2g6J31cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbklucHV0PXtzZWFyY2guc2VhcmNoVGFza3N9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaC5zZWFyY2hUYXNrc1ZhbHVlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfQktCy0LXQtNC40YLQtSDRgdC70L7QstCwINC00LvRjyDQv9C+0LjRgdC60LAg0YDQsNC30LTQtdC70Y/RjyDQuNGFINC/0YDQvtCx0LXQu9C+0LwnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciB0aGUgd29yZHMgdG8gc2VhcmNoIGJ5IHNlcGFyYXRpbmcgdGhlbSB3aXRoIGEgc3BhY2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGFza3M/Lmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtdC0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIG91dGxpbmVkIGV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlPXt0YXNrVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICB0YXNrcz17dGFza3N9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhbmd1YWdlID09PSAncnUnID8gJ9CY0YHQutCw0YLRjCcgOiAnU2VhcmNoJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgID8gJ9CS0Ysg0LzQvtC20LXRgtC1INC90LDQudGC0Lgg0YHQstC+0Lgg0LfQsNC00LDRh9C4INC40YHQv9C+0LvRjNC30YPRjyDRjdGC0L7RgiDQv9C+0LjRgdC6J1xuICAgICAgICAgICAgICAgICAgICA6ICdZb3UgY2FuIGZpbmQgeW91ciB0YXNrcyB1c2luZyB0aGlzIHNlYXJjaCd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgRGVzY3JpcHRpb24gLSBDb250YWlucyBhIGN1c3RvbSB0YXNrXG4gKiAqL1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW50LCBjb21wbGV0ZWQsIGNyZWF0ZWQsIGRlYWRsaW5lIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuICAgIGxldCBjbGFzc2VzID0gJ2JpICc7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgY29tcGxldGVkOlxuICAgICAgICAgICAgY2xhc3NlcyArPSAnYmktY2hlY2syLWNpcmNsZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpbXBvcnRhbnQ6XG4gICAgICAgICAgICBjbGFzc2VzICs9ICdiaS1leGNsYW1hdGlvbi1kaWFtb25kJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2xhc3NlcyArPSAnYmktYm9va21hcmtzLWZpbGwnO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0b2RvLWFydGljbGUgdGV4dC1jZW50ZXIgdGV4dC1tZC1zdGFydFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ7IG1peGluLWxpc3QtaXRlbS1jaGlsZCB9IGJvcmRlci1ib3R0b20gbWItMlwiPlxuICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW9uZS1leHByZXNzaW9uLXBlci1saW5lICovfVxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQl9Cw0LTQsNC90LjQtSDQsdGL0LvQviDRgdC+0LfQtNCw0L3QvjonIDogJ1RoZSB0YXNrIGhhcyBiZWVuIGNyZWF0ZWQ6J317JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrXCI+e2NyZWF0ZWQgfHwgJ2F1dG8nfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRvZG8taGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlc30+IDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLTFcIiBkYXRhLWVkaXQ9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1jb250ZW50XCIgZGF0YS1lZGl0PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwieyBtaXhpbi1saXN0LWl0ZW0tY2hpbGQgfSBib3JkZXItdG9wIG10LTJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS13YXRjaFwiPiA8L2k+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Ca0YDQsNC50L3QuNC5INGB0YDQvtC6OicgOiAnRGVhZGxpbmU6J31cbiAgICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBwcy0xXCIgZGF0YS1kZWFkbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGVhZGxpbmUgfHwgJzAw0LQgOiAyNNGHIDogNTTQvCA6IDIyYydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVhZGxpbmUgfHwgJzAwZCA6IDI0aCA6IDU0bSA6IDIycyd9XG4gICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgSW50ZXJmYWNlIC0gUmVuZGVyIG9mIHVzZXIgaW50ZXJmYWNlcyBmb3IgdGFza1xuICogKi9cblxuY29uc3QgSW50ZXJmYWNlID0gKHsgdGFza0V2ZW50cywgaXNJbXBvcnRhbnQsIGlzQ29tcGxldGVkIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgbGV0IHRleHRGb3JJbXBvcnRhbnRCdG47XG4gICAgbGV0IHRleHRGb3JDb21wbGV0ZWRCdG47XG4gICAgaWYgKGxhbmd1YWdlID09PSAncnUnKSB7XG4gICAgICAgIHRleHRGb3JJbXBvcnRhbnRCdG4gPSBpc0ltcG9ydGFudCA/ICfQn9GA0L7RgdGC0LDRjycgOiAn0JLQsNC20L3QsNGPJztcbiAgICAgICAgdGV4dEZvckNvbXBsZXRlZEJ0biA9IGlzQ29tcGxldGVkID8gJ9CS0LXRgNC90YPRgtGMJyA6ICfQktGL0L/QvtC70L3QtdC90LAnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRGb3JJbXBvcnRhbnRCdG4gPSBpc0ltcG9ydGFudCA/ICdTaW1wbGUnIDogJ0ltcG9ydGFudCc7XG4gICAgICAgIHRleHRGb3JDb21wbGV0ZWRCdG4gPSBpc0NvbXBsZXRlZCA/ICdCYWNrJyA6ICdDb21wbGV0ZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWludGVyZmFjZXMgZC1mbGV4IGZsZXgtd3JhcCBtaW4tdy0zMjBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrRXZlbnRzLm9uSW1wb3J0YW50fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW50ZXJmYWNlIGJ0bi1vdXRsaW5lLXdhcm5pbmcgYnV0dG9uLWluZm9cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW50ZXJmYWNlPVwiaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISFpc0NvbXBsZXRlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dEZvckltcG9ydGFudEJ0bn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Rhc2tFdmVudHMub25Db21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbnRlcmZhY2UgYnRuLW91dGxpbmUtc3VjY2VzcyBidXR0b24taW5mb1wiXG4gICAgICAgICAgICAgICAgZGF0YS1pbnRlcmZhY2U9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0Rm9yQ29tcGxldGVkQnRufVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGFza0V2ZW50cy5vbkVkaXRpbmd9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbnRlcmZhY2UgYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ1dHRvbi1pbmZvXCJcbiAgICAgICAgICAgICAgICBkYXRhLWludGVyZmFjZT1cImVkaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWlzQ29tcGxldGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCcgOiAnRWRpdCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrRXZlbnRzLm9uRGVsZXRlZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWludGVyZmFjZSBidG4tb3V0bGluZS1kYW5nZXIgYnV0dG9uLWluZm9cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW50ZXJmYWNlPVwiZGVsZXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0KPQtNCw0LvQuNGC0YwnIDogJ0RlbGV0ZSd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL2Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBUYXNrIC0gUmVuZGVyIHRhc2sgZGVzY3JpcHRpb24gYW5kIHRhc2sgaW50ZXJmYWNlLlxyXG4gKiBEZWZpbmluZyB0aGUgdG9waWMsIHByaW9yaXR5LCBhbmQgZXhlY3V0aW9uXHJcbiAqICovXHJcblxyXG5jb25zdCBUYXNrID0gKHsgdGFza0V2ZW50cywgdGFzaywgdGhlbWUsIGNsYXNzZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgY3JlYXRlZCwgZGVhZGxpbmUsIGhpZGRlbiB9ID0gdGFzaztcclxuICAgIGNvbnN0IGNsYXNzZXNXaXRoVGhlbWUgPSB0aGVtZXMoJ3Rhc2snLCB0aGVtZSwgY2xhc3NlcywgW2NvbXBsZXRlZCwgaW1wb3J0YW50XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzV2l0aFRoZW1lfSBkYXRhLWlkZW50aWZ5PXtpZH0gaGlkZGVuPXshIWhpZGRlbn0+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50PXtpbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2NyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICBkZWFkbGluZT17ZGVhZGxpbmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnRlcmZhY2UgdGFza0V2ZW50cz17dGFza0V2ZW50c30gaXNJbXBvcnRhbnQ9e2ltcG9ydGFudH0gaXNDb21wbGV0ZWQ9e2NvbXBsZXRlZH0gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBUYXNrcyAtIFJlbmRlciBvZiBhbGwgY29tcG9uZW50cyBvZiB0aGUgVGFzay5cclxuICogVGhlIG51bWJlciBvZiB0YXNrIGNvbXBvbmVudHMgaXMgdGhlIHNpemUgb2YgdGhlIGFycmF5IHsgdGFza3MgfVxyXG4gKiAqL1xyXG5cclxuY29uc3QgVGFza3MgPSAoeyB0YXNrRXZlbnRzLCB0YXNrcywgdGhlbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHRoZW1lcygndGFza3MnLCB0aGVtZSwgJ3sgbWl4aW4tbGlzdC1pdGVtIH0gZmxleC1tZC1yb3cgcC0xIHAtbWQtMicpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJyb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJbIGNvbC0xMiBdXCI+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoeyB0YXJnZXQgfSkgPT4gdGFza0V2ZW50cy5zZXRFZGl0YWJsZSh0YXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3Rhc2tFdmVudHMuZWRpdGFibGVUYXNrSW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0YXNrRXZlbnRzLmVkaXRhYmxlVGFza091dH1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3Rhc2tFdmVudHMuZWRpdGFibGVUYXNrRXhpdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0YXNrRXZlbnRzLmVkaXRhYmxlVGFza0VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFdmVudHM9e3Rhc2tFdmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7XHJcbiIsImltcG9ydCBUYXNrcyBmcm9tICcuL3Rhc2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iLCJpbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIsIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgcnVMb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3J1JztcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbi1VUyc7XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgICBlbjogZW5Mb2NhbGUsXHJcbiAgICBydTogcnVMb2NhbGUsXHJcbn07XHJcblxyXG5leHBvcnQgeyBEYXRlRm5zVXRpbHMsIERhdGVUaW1lUGlja2VyLCBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgbG9jYWxlTWFwIH07XHJcbiIsImltcG9ydCB7XHJcbiAgICBEYXRlRm5zVXRpbHMsXHJcbiAgICBEYXRlVGltZVBpY2tlcixcclxuICAgIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gICAgbG9jYWxlTWFwLFxyXG59IGZyb20gJy4vbWF0ZXJpYWwtdWktcGlja2Vycyc7XHJcblxyXG5leHBvcnQgeyBEYXRlRm5zVXRpbHMsIERhdGVUaW1lUGlja2VyLCBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgbG9jYWxlTWFwIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5pbXBvcnQge1xuICAgIERhdGVGbnNVdGlscyxcbiAgICBEYXRlVGltZVBpY2tlcixcbiAgICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcbiAgICBsb2NhbGVNYXAsXG59IGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvbWF0ZXJpYWwtdWktcGlja2Vycyc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBTZW5kIC0gU2VuZCBhIHRhc2sgdG8gdGhlIGRhdGFiYXNlXG4gKiAqL1xuXG5jb25zdCBTZW5kID0gKHsgc3VibWl0IH0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkRGF0ZSwgaGFuZGxlRGF0ZUNoYW5nZSB9ID0gc3VibWl0O1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG5cbiAgICAvKipcbiAgICAgKiBAY29tcG9uZW50IERlYWRsaW5lIC0gZGVhZGxpbmUgZm9yIGNvbXBsZXRpb24gaWYgdGhlIGRlYWRsaW5lIGZvciB0aGUgZmxhZyB3YXMgc2V0IGFzICd0cnVlJ1xuICAgICAqICovXG5cbiAgICBjb25zdCBEZWFkbGluZSA9ICgpID0+IChcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9IGxvY2FsZT17bG9jYWxlTWFwW2xhbmd1YWdlXX0+XG4gICAgICAgICAgICA8RGF0ZVRpbWVQaWNrZXIgdmFsdWU9e3NlbGVjdGVkRGF0ZX0gb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyBjb2xsYXBzZVwiIGlkPVwiYWRkLXRhc2tcIj5cbiAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvLXRpdGxlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YPRjiDQt9Cw0LTQsNGH0YM6JyA6ICdBZGQgYSBuZXcgdGFzazonfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3N1Ym1pdC5vbklucHV0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VibWl0LnN1Ym1pdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvZG8tdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9kby10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INC90L7QstC+0Lkg0LfQsNC00LDRh9C4OidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnRW50ZXIgdGhlIG5hbWUgb2YgdGhlIG5ldyB0YXNrOidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQndCw0LfQstCw0L3QuNC1INC30LDQtNCw0YfQuCDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LTQu9C40L3QvdC10LUg0YHQtdC80Lgg0YHQuNC80LLQvtC70L7QsiDQuCDQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDRgdC40LzQstC+0LvRi1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ9GA0YPRgdGB0LrQvtCz0L4g0LjQu9C4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0LDQu9GE0LDQstC40YLQsCwg0YbQuNGE0YDRiyDQuCDRgdC70LXQtNGD0Y7RidC40LUg0LfQvdCw0LrQuDogISA/ICQgJSAmICogKCApXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKyA9IC0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnVGhlIHRhc2sgbmFtZSBtdXN0IGJlIGxvbmdlciB0aGFuIHNldmVuIGNoYXJhY3RlcnMgYW5kIG1heSBjb250YWluIHRoZSBjaGFyYWN0ZXJzIFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1J1c3NpYW4gb3IgRW5nbGlzaCBhbHBoYWJldCwgbnVtYmVycyBhbmQgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiAhID8gJCAlICYgKiAoIClcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrID0gLSd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINC30LDQtNCw0YfRgzonIDogJ0Rlc2NyaWJlIHlvdXIgdGFzazonfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtzdWJtaXQub25JbnB1dERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1Ym1pdC5zdWJtaXREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b2RvLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1maXgtdGdsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQktCy0LXQtNC40YLQtSDRgtC10LrRgdGCINC90L7QstC+0Lkg0LfQsNC00LDRh9C4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciB0aGUgdGV4dCBvZiB0aGUgbmV3IHRhc2snXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvZG8tZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Ce0L/QuNGB0LDQvdC40LUg0LfQsNC00LDRh9C4INC00L7Qu9C20L3QviDQsdGL0YLRjCDQtNC70LjQvdC90LXQtSDRgdC10LzQuCDRgdC40LzQstC+0LvQvtCyINC4INC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINGB0LjQvNCy0L7Qu9GLXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn0YDRg9GB0YHQutC+0LPQviDQuNC70Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDQsNC70YTQsNCy0LjRgtCwLCDRhtC40YTRgNGLINC4INGB0LvQtdC00YPRjtGJ0LjQtSDQt9C90LDQutC4OiAhID8gJCAlICYgKiAoIClcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrID0gLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdUaGUgdGFzayBkZXNjcmlwdGlvbiBtdXN0IGJlIGxvbmdlciB0aGFuIHNldmVuIGNoYXJhY3RlcnMgYW5kIG1heSBjb250YWluIHRoZSBjaGFyYWN0ZXJzIFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1J1c3NpYW4gb3IgRW5nbGlzaCBhbHBoYWJldCwgbnVtYmVycyBhbmQgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiAhID8gJCAlICYgKiAoIClcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrID0gLSd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgcHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3N1Ym1pdC5vbkNoYW5nZUltcG9ydGFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdWJtaXQuc3VibWl0SW1wb3J0YW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJpbXBvcnRhbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0J7RgtC80LXRgtC40YLRjCDQutCw0Log0LLQsNC20L3Rg9GOJyA6ICdNYXJrIGFzIGltcG9ydGFudCd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3VibWl0Lm9uQ2hhbmdlQ29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N1Ym1pdC5zdWJtaXRDb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQntGC0LzQtdGC0LjRgtGMINC60LDQuiDQt9Cw0LLQtdGA0YjQtdC90L3Rg9GOJyA6ICdNYXJrIGFzIGNvbXBsZXRlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3VibWl0Lm9uRGVhZGxpbmVFbmFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3VibWl0LnN1Ym1pdERlYWRsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImRlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJkZWFkbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQo9GB0YLQsNC90L7QstC40YLRjCDQutGA0LDQudC90LjQuSDRgdGA0L7QuicgOiAnU2V0IGEgZGVhZGxpbmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJtaXQuc3VibWl0RGVhZGxpbmUgPyA8RGVhZGxpbmUgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0LmFkZFRhc2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHctMTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQlNC+0LHQsNCy0LjRgtGMJyA6ICdBZGQnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmQ7XG4iLCJpbXBvcnQgU2VuZCBmcm9tICcuL3NlbmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VuZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IENvdW50ZXIgLSBTaG93IGluZm9ybWF0aW9uIGFib3V0IHRhc2tzLlxuICogTnVtYmVyIG9mIGN1cnJlbnQgYW5kIGNvbXBsZXRlZCB0YXNrcy5cbiAqICovXG5cbmNvbnN0IENvdW50ZXIgPSAoeyB0YXNrcyB9KSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiWyBjb2wtMTIgY29sLWxnLTQgXSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtZW5kXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQl9Cw0LTQsNC90LjQuSDQvtGB0YLQsNC70L7RgdGMINCy0YvQv9C+0LvQvdC40YLRjDonIDogJ1Rhc2tzIGxlZnQgdG8gY29tcGxldGU6J31cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRvZG89XCJzdGlsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7YCAke3Rhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKS5sZW5ndGh9YH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CX0LDQtNCw0L3QuNC5INCy0YvQv9C+0LvQvdC10L3QvjonIDogJ1Rhc2tzIGNvbXBsZXRlZDonfVxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdG9kbz1cImNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtgICR7dGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCkubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIiwiaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi4vYnV0dG9ucyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IEZpbHRlcnMgLSBUYXNrIGZpbHRlci5cbiAqIEFiaWxpdHkgdG8gc2hvdyBhbGwsIGltcG9ydGFudCBvciBjb21wbGV0ZWQgdGFza3NcbiAqICovXG5cbmNvbnN0IEZpbHRlcnMgPSAoeyB0YXNrcywgdGFza1RvZ2dsZSB9KSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJbIGNvbC0xMiBjb2wteGwtNiBjb2wtbWQtOCBdIGJ0bi1ncm91cCBtdC0yXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiZ3JvdXBcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2RvIGxpc3QgYnV0dG9uc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgdGFza1RvZ2dsZT17dGFza1RvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgdGFza3M9e3Rhc2tzfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQn9C+0LrQsNC30LDRgtGMJyA6ICdTaG93J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycztcbiIsImltcG9ydCBGaWx0ZXJzIGZyb20gJy4vZmlsdGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xyXG4iLCIvKlxuICogQ29tcG9uZW50IHRvZG8tbGlzdFxuICogKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCBUYXNrcyBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCBTZW5kIGZyb20gJy4vc2VuZCc7XG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgVG9nZ2xlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IFRvZG9MaXN0IC0gTWFpbiBjb21wb25lbnQgZm9yIHRvZG9zXG4gKiBSZW5kZXI6IFNlYXJjaCwgVGFza3MsIFNlbmQsIENvdW50ZXIsIEZpbHRlcnMgYW5kIDIgVG9nZ2xlXG4gKiAqL1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7IHRhc2tFdmVudHMsIHRhc2tUb2dnbGUsIHN1Ym1pdCwgdGFza3MsIHRoZW1lLCBzZWFyY2ggfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoZW1lcygndG9kby1saXN0JywgdGhlbWUsICd0b2RvLWxpc3QgZmxleC1ncm93LTEgdHJhbnNpdGlvbi1iZycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlsgY29udGFpbmVyLXhsIGNvbC0xMiBdXCI+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQn9C+0LrQsNC30LDRgtGMINC/0L7QuNGB0LonIDogJ1Nob3cgc2VhcmNoJ31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiI3NlYXJjaC10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQn9C+0LrQsNC30LDRgtGMINC80LXQvdGOINC00LvRjyDQv9C+0LjRgdC60LAg0LfQsNC00LDQvdC40LknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnU2hvdyB0aGUgdGFzayBzZWFyY2ggbWVudSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmktc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1lbmQgY29sbGFwc2VcIiBpZD1cInNlYXJjaC10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCB0YXNrcz17dGFza3N9IHRhc2tUb2dnbGU9e3Rhc2tUb2dnbGV9IHNlYXJjaD17c2VhcmNofSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlciB0YXNrcz17dGFza3N9IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxUYXNrcyB0YXNrRXZlbnRzPXt0YXNrRXZlbnRzfSB0YXNrcz17dGFza3N9IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgICAgICA8RmlsdGVycyB0YXNrVG9nZ2xlPXt0YXNrVG9nZ2xlfSB0YXNrcz17dGFza3N9IC8+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQodC+0LfQtNCw0YLRjCDQt9Cw0LTQsNC90LjQtScgOiAnQ3JlYXRlIHRhc2snfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCIjYWRkLXRhc2tcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfQn9C+0LrQsNC30LDRgtGMINC80LXQvdGOINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC30LDQtNCw0L3QuNC5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1Nob3cgdGFzayBjcmVhdGUgbWVudSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmktcGVuY2lsLWZpbGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNlbmQgc3VibWl0PXtzdWJtaXR9IC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvLWxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgRm9vdGVyIC0gUmVuZGVyIHRoZSBmb290ZXIgb2YgdGhlIHNpdGVcbiAqIFJlbmRlcjogVG9nZ2xlLCBJbmZvcm1hdGlvbiwgQWJvdXRcbiAqICovXG5cbmNvbnN0IEZvb3RlciA9ICh7IHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGVtZXMoXG4gICAgICAgICdmb290ZXInLFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgJ3sgbWl4aW4tZm9vdGVyIH0gdG9kby1mb290ZXIgY29udGFpbmVyLWZsdWlkIG5hdmJhci1kYXJrJyxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW5kIHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Cc0LXQvdC10LTQttC10YAg0LfQsNC00LDRhycgOiAnVGFzayBNYW5hZ2VyJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCIvKlxuICogTWFpbiBhcHAgY29tcG9uZW50XG4gKiDQntGB0L3QvtCy0L3QvtC5INC60L7QvNC/0L7QvdC10L3RgiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvLWxpc3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQXBwIC0gbWFpbiBhcHAgY29tcG9uZW50LlxuICog0L7RgdC90L7QstC90L7QuSDQutC+0LzQv9C+0L3QtdC90YIg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqICovXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICAvKlxuICAgICAqIElmIHRoZSBhcHBsaWNhdGlvbiB3YXMgZG93bmxvYWRlZCBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgKiBvciB0aGUgbG9jYWwgc3RhdGUgaGFzIGJlZW4gZGVsZXRlZCBhbmQgdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxuICAgICAqIHRoZSBkZWZhdWx0IHRhc2sgaXMgdXNlZFxuICAgICAqINCV0YHQu9C4INC/0YDQuNC70L7QttC10L3QuNC1INCx0YvQu9C+INC30LDQs9GA0YPQttC10L3QviDRgSDRg9GB0YLRgNC+0LnRgdGC0LLQsCDQstC/0LXRgNCy0YvQtVxuICAgICAqINC40LvQuCDQu9C+0LrQsNC70YzQvdC+0LUg0YXRgNCw0L3QuNC70LjRidC1INC90LUg0LHRi9C70L4g0L7QsdC90LDRgNGD0LbQtdC90L4g0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICog0LrQviDQstGB0LXQvNGDINC90LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC90LAg0YHQsNC50YLQtSwg0YLQviDQtNCw0L3QvdC+0LUg0LfQsNC00LDQvdC40LUg0LHRg9C00LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90L5cbiAgICAgKiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxuICAgICAqL1xuXG4gICAgY29uc3QgZGVmYXVsdFRhc2sgPSBbXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ9Ct0YLQviDQt9Cw0LTQsNC90LjQtSDRgdC+0LfQtNCw0L3QviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQtNC70Y8g0L/RgNC40LzQtdGA0LAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ9CS0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQtdCz0L4g0Lgg0L3QsNGH0LDRgtGMINGB0L7Qt9C00LDQstCw0YLRjCDQtNGA0YPQs9C40LUg0LfQsNC00LDQvdC40Y8uINCX0LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0L3QsCDRgdCw0LnRgtC1INGH0YLQvi3QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LHQvtC70YzRiNC1INCy0L7Qt9C80L7QttC90L7RgdGC0LXQuS4g0KPQtNCw0YfQuCEnLFxuICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkOiAn0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LgnLFxuICAgICAgICAgICAgZGVhZGxpbmU6ICcxZCAxaCAxbSAxcycsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgICBdO1xuXG4gICAgLyogc3RhdGVzIGFuZCB1c2UgZWZmZWN0cyAqL1xuXG4gICAgLypcbiAgICAgKiB0aGVtZSBzdGF0ZVxuICAgICAqINGB0L7RgdGC0L7Rj9C90LjQtSDRgtC10LzRi1xuICAgICAqICovXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCAnbGlnaHQnKTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBkZWFkbGluZVNldHRpbmdCZWZvcmVSZW5kZXIgLSBjcmVhdGVzIGEgZGF0ZSBmb3JtYXQgYmVmb3JlIHRhc2sgcmVuZGVyXG4gICAgICog0YHQvtC30LTQsNC10YIg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0YTQvtGA0LzQsNGCINC00LDRgtGLINC00L4g0L7RgtGA0LjRgdC+0LLQutC4INC30LDQtNCw0L3QuNC5XG4gICAgICogQHBhcmFtIHtkZWFkbGluZVRpbWVTdGFtcH0gZGF0ZSAtIGRlYWRsaW5lIHRpbWVzdGFtcCAoY3VycmVudCBkYXRlIG9mIGRlYWRsaW5lKVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBmb3JtYXR0ZWQgZGF0YVxuICAgICAqINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0YLRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QvdGD0Y4g0LTQsNGC0YNcbiAgICAgKiAqL1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgY29uc3QgZGVhZGxpbmVTZXR0aW5nQmVmb3JlUmVuZGVyID0gKHsgZGVhZGxpbmVUaW1lU3RhbXAgfSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkZWFkbGluZVRpbWVTdGFtcCAtIGN1cnJlbnRUaW1lc3RhbXApIC8gMTAwMCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuXG4gICAgICAgIGNvbnN0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcbiAgICAgICAgY29uc3QgaG91cnNMZWZ0ID0gaG91cnMgLSBkYXlzTGVmdCAqIDI0O1xuICAgICAgICBjb25zdCBtaW51dGVzTGVmdCA9IG1pbnV0ZXMgLSBob3VycyAqIDYwO1xuICAgICAgICBjb25zdCBzZWNvbmRzTGVmdCA9IHNlY29uZHMgLSBtaW51dGVzICogNjA7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheXNMZWZ0fWQgJHtob3Vyc0xlZnR9aCAke21pbnV0ZXNMZWZ0fW0gJHtzZWNvbmRzTGVmdH1zYDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiB0YXNrIHN0YXRlIChnZXQgdGFza3MgYW5kIHNob3cgb25seSBhY3RpdmUgb25lcyBhdCB0aGUgZmlyc3QgZG93bmxvYWQpXG4gICAgICog0L/RgNC4INC60LDQttC00L7QuSDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0Ysg0LHRg9C00LXRgiDQstC30Y/RgiDQvtCx0YrQtdC60YIg0LjQtyDQu9C+0LrQsNC70YzQvdC+0LPQviDRhdGA0LDQvdC40LvQuNGJ0LBcbiAgICAgKiDQuNC70Lgg0LfQsNC00LDQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LIg0YHQu9GD0YfQsNC1INC10LPQviDQvtGC0YHRg9GC0YHRgtCy0LjRjy4g0JTQsNC70LXQtSDQsdGD0LTRg9GCINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdGLINCy0YHQtVxuICAgICAqINC90LUg0LLRi9C/0L7Qu9C90LXQvdC90YvQtSDQt9Cw0LTQsNC90LjRjyDQuCDRg9GB0YLQsNC90L7QstC70LXQvdGLINC60LDQuiDQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8gdGFza3NcbiAgICAgKiDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdC+INC/0LXRgNC10LrQu9GO0YfQuNCyINGE0LvQsNCzINGE0LvQsNCzINCyINC/0L7Qu9C+0LbQtdC90LjQtSBmYWxzZVxuICAgICAqICAqL1xuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoXG4gICAgICAgIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBkZWZhdWx0VGFzaykuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5kZWFkbGluZVRpbWVTdGFtcCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBkZWFkbGluZTogZGVhZGxpbmVTZXR0aW5nQmVmb3JlUmVuZGVyKHRhc2spIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFzayAmJiAhdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuOiB0cnVlIH0pO1xuICAgICAgICB9KSxcbiAgICApO1xuXG4gICAgLypcbiAgICAgKiBzZXQgZGVhZGxpbmUuIGNvbXBvbmVudCAnc2VuZCcsIGxpYnJhcnkgLSBtYXRlcmlhbC11aS1waWNrZXJzXG4gICAgICog0L3QsNGB0YLRgNC+0LnQutCwINC60YDQsNC50L3QtdCz0L4g0YHRgNC+0LrQsCDQstGL0L/QvtC70L3QtdC90LjRjyDQt9Cw0LTQsNGH0LguINCx0LjQsdC70LjQvtGC0LXQutCwIC0gbWF0ZXJpYWwtdWktcGlja2Vyc1xuICAgICAqICovXG4gICAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgaGFuZGxlRGF0ZUNoYW5nZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICAgIC8qXG4gICAgICogb3RoZXIgbm9kZSBlbGVtZW50cyBzdGF0ZVxuICAgICAqINGB0L7RgdGC0L7Rj9C90LjQtSDQtNC70Y8g0LrQvdC+0L/QvtC6INC00L7QsdCw0LLQu9C10L3QuNGPINC30LDQtNCw0YfQuCwg0LDQutGC0LjQstC90L7QuSDQt9Cw0LTQsNGH0LgsINC30LDQs9C+0LvQvtCy0LrQsCDQuCDQvtC/0LjRgdCw0L3QuNGPXG4gICAgICogKi9cbiAgICBjb25zdCBbc2VuZEJ1dHRvbiwgc2V0U2VuZEJ1dHRvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYWN0aXZlQnV0dG9uLCBzZXRBY3RpdmVCdXR0b25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1Ym1pdFRpdGxlRWxlbWVudCwgc2V0U3VibWl0VGl0bGVFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdWJtaXREZXNjRWxlbWVudCwgc2V0U3VibWl0RGVzY0VsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAqIHNldHRpbmcgc3RhdGUgYWZ0ZXIgbW91bnRpbmdcbiAgICAgKiDQvdCw0YHRgtGA0L7QudC60LAg0YHQvtGB0YLQvtGP0L3QuNC5INC/0L7RgdC70LUg0LzQvtC90YLQuNGA0L7QstCw0L3QuNGPINC60L7QvNC/0L7QvdC10L3RgtCwXG4gICAgICogKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZW5kQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXRhcmdldD1cIiNhZGQtdGFza1wiXScpKTtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbHRlcj1cImFjdGl2ZVwiXScpKTtcbiAgICAgICAgc2V0U3VibWl0VGl0bGVFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJykpO1xuICAgICAgICBzZXRTdWJtaXREZXNjRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZGVhZGxpbmUgLSBzZXQgZGVhZGxpbmUgZm9yIHRhc2tcbiAgICAgKiDQvtGC0L7QsdGA0LDQttCw0LXRgiDQvtGB0YLQsNCy0YjQtdC10YHRjyDQstGA0LXQvNGPINCy0YvQv9C+0LvQvdC10L3QuNGPINC30LDQtNCw0YfQuFxuICAgICAqICovXG5cbiAgICBjb25zdCBkZWFkbGluZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlYWRsaW5lXScpXTtcbiAgICAgICAgY29uc3QgY291bnRkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgZGVhZGxpbmVzLmZvckVhY2goKGRlYWRMaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10gPSBkZWFkTGluZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXJJc0FjdGl2ZSA9IGRheXMgfHwgaG91cnMgfHwgbWludXRlcyB8fCBzZWNvbmRzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVySXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDAgJiYgbWludXRlcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gNTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAwICYmIGhvdXJzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSA1OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXJzIDwgMCAmJiBkYXlzID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlYWRMaW5lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bSAke3NlY29uZHN9c2AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNvdW50ZG93biwgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBlZmZlY3QgZm9yIGRlYWRsaW5lXG4gICAgICog0Y3RhNGE0LXQutGCINC00LvRjyDQvdCw0YHRgtGA0L7QudC60Lgg0LrRgNCw0LnQvdC10LPQviDRgdGA0L7QutCwINC30LDQtNCw0YfQuFxuICAgICAqICovXG4gICAgdXNlRWZmZWN0KGRlYWRsaW5lLCBbdGFza3NdKTtcblxuICAgIC8qXG4gICAgICogcG9wLXVwIG1lc3NhZ2VzXG4gICAgICog0LLRgdC/0LvRi9Cy0LDRjtGJ0LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y9cbiAgICAgKi9cbiAgICBjb25zdCBbdG9hc3RzLCBzZXRUb2FzdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLypcbiAgICAgKiBsYW5ndWFnZSBzdGF0ZVxuICAgICAqINGB0L7RgdGC0L7Rj9C90LjQtSDQu9C+0LrQsNC70LjQt9Cw0YbQuNC4XG4gICAgICogICovXG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSB8fCAncnUnKTtcblxuICAgIC8qXG4gICAgICogc2V0dGluZyB0aGUgc3RhdGVzIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCAodG9kby1saXN0L3NlbmQpXG4gICAgICog0L3QsNGB0YLRgNC+0LnQutCwINGB0L7RgdGC0L7Rj9C90LjRjyDQtNC70Y8g0LrQvtC90YLRgNC+0LvQuNGA0YPQtdC80YvRhSDQutC+0LzQv9C+0L3QtdC90YLQvtCyINGE0L7RgNC80YsgKHRvZG8tbGlzdC9zZW5kKVxuICAgICAqL1xuICAgIGNvbnN0IFtzdWJtaXRUaXRsZSwgc2V0U3VibWl0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzdWJtaXREZXNjcmlwdGlvbiwgc2V0U3VibWl0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzdWJtaXRJbXBvcnRhbnQsIHNldFN1Ym1pdEltcG9ydGFudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Ym1pdENvbXBsZXRlZCwgc2V0U3VibWl0Q29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VibWl0RGVhZGxpbmUsIHNldFN1Ym1pdERlYWRsaW5lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qXG4gICAgICogc2V0dGluZyB0aGUgc3RhdGVzIG9mIHRoZSBjdXJyZW50IGVkaXRhYmxlIGNvbnRlbnRzICh0b2RvLWxpc3QvdGFza3MpXG4gICAgICog0YHQvtGB0YLQvtGP0L3QuNC1INGC0LXQutGD0YnQtdCz0L4g0YDQtdC00LDQutGC0LjRgNGD0LXQvNC+0LPQviDQutC+0L3RgtC10L3RgtCwICh0b2RvLWxpc3QvdGFza3MpXG4gICAgICovXG4gICAgY29uc3QgW2VkaXRhYmxlQ29udGVudCwgc2V0RWRpdGFibGVDb250ZW50XSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIC8qXG4gICAgICogc2V0dGluZyB0aGUgc3RhdGVzIG9mIHRoZSBjdXJyZW50IGVkaXRhYmxlIGJ1dHRvblxuICAgICAqINGC0LXQutGD0YnQsNGPINC60L3QvtC/0LrQsCAn0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwnXG4gICAgICovXG4gICAgY29uc3QgW2N1cnJlbnRFZGl0YWJsZUJ1dHRvbiwgc2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLypcbiAgICAgKiB0aW1lciByZW1vdmFsIGVkaXRhYmxlIGF0dHJpYnV0ZVxuICAgICAqINGC0LDQudC80LXRgCDRg9C00LDQu9C10L3QuNGPINCw0YLRgNC40LHRg9GC0LAgZWRpdGFibGVcbiAgICAgKi9cbiAgICBsZXQgW3RvZ2dsZUVkaXRhYmxlQXR0cmlidXRlVGltZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAqIHRoZSBmaWx0ZXIgYnV0dG9uIHdpbGwgYmUgYSBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGZpbHRlclxuICAgICAqIGFsbCwgaW1wb3J0YW50LCBjb21wbGV0ZWQsIGN1cnJlbnQgLSBhY3RpdmVcbiAgICAgKiBhbGwsIGFjdGl2ZSwgaW1wb3J0YW50LCBjb21wbGV0ZWRcbiAgICAgKiDRgdC+0YHRgtC+0Y/QvdC40LUg0LTQu9GPINC+0YLRgdC70LXQttC40LLQsNC90LjRjyDRgtC10LrRg9GJ0LXQuSDQutC90L7Qv9C60Lgg0YTQuNC70YzRgtGA0LAg0LfQsNC00LDRh1xuICAgICAqINC90LXQvtCx0YXQvtC00LjQvNC+INC00LvRjyDRgtC+0LPQviDRh9GC0L4t0LHRiyDQv9C+0L3Rj9GC0Ywg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YHQutGA0YvQstCw0YLRjCDQv9GA0Lgg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC4XG4gICAgICogYWxsLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgY3VycmVudCAtIGFjdGl2ZVxuICAgICAqL1xuICAgIGNvbnN0IFtmaWx0ZXJCdXR0b24sIHNldEZpbHRlckJ1dHRvbl0gPSB1c2VTdGF0ZSgnYWN0aXZlJyk7XG5cbiAgICAvKlxuICAgICAqIHN0YXRlIGZvciB0YXNrIHNlYXJjaFxuICAgICAqINC/0L7QuNGB0Log0LfQsNC00LDRh9C4XG4gICAgICovXG4gICAgY29uc3QgW3NlYXJjaFRhc2tzVmFsdWUsIHNldFNlYXJjaFRhc2tzVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLypcbiAgICAgKiB2YWxpZGF0ZSBiZWZvcmUgc2VuZGluZ1xuICAgICAqINC60LvQuNC10L3RgtGB0LrQsNGPINCy0LDQu9C40LTQsNGG0LjRjyDQv9C10YDQtdC0INC+0YLQv9GA0LDQstC60L7QuSDQtNCw0L3QvdGL0YVcbiAgICAgKi9cbiAgICBjb25zdCBbc2VuZGluZ0RhdGFJc1ZhbGlkLCBzZXRTZW5kaW5nRGF0YUlzVmFsaWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAqIHN0YXRlIHRhc2sgY29udGVudCBiZWZvcmUgZWRpdGluZ1xuICAgICAqINGB0L7RgdGC0L7Rj9C90LjQtSDQutC+0L3RgtC10L3RgtCwINC30LDQtNCw0YfQuCDQv9C10YDQtdC0INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LXQvFxuICAgICAqINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQv9C+0L3Rj9GC0Ywg0L3Rg9C20L3QviDQu9C4INGB0L7RhdGA0LDQvdGP0YLRjCDQtNCw0L3QvdGL0LVcbiAgICAgKi9cbiAgICBjb25zdCBbY29udGVudEJlZm9yZUVkaXQsIHNldENvbnRlbnRCZWZvcmVFZGl0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNlYXJjaFRhc2tzIC0gc2VhcmNoIGZvciB0YXNrcyB2aWEgdGhlIHNlYXJjaCBmb3JtXG4gICAgICog0L/QvtC40YHQuiDQt9Cw0LTQsNC90LjQuVxuICAgICAqIEBwYXJhbSB7KEhUTUxJbnB1dEVsZW1lbnR8T2JqZWN0KX0gdGFyZ2V0IC0gaW5wdXQgZWxlbWVudFxuICAgICAqINGN0LvQtdC80LXQvdGCIGlucHV0XG4gICAgICogU1RBVEU6IHNldFRhc2tzLCBzZXRTZWFyY2hUYXNrc1ZhbHVlXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNlYXJjaFRhc2tzID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IFsuLi50YXNrc10ubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaENvbnRlbnQgPSBbLi4udGFzay50aXRsZS5zcGxpdCgnICcpLCAuLi50YXNrLmRlc2NyaXB0aW9uLnNwbGl0KCcgJyldLmZpbHRlcihcbiAgICAgICAgICAgICAgICAod29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeJHt3b3JkfSRgLCAnZ2knKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLnNwbGl0KCcgJykuZmlsdGVyKCh2YWwpID0+IHZhbC5tYXRjaChyZWdleHApKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobWF0Y2hDb250ZW50Lmxlbmd0aCB8fCAhdmFsdWUudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQnV0dG9uID09PSAnYWN0aXZlJyAmJiAhdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdpbXBvcnRhbnQnICYmIHRhc2suaW1wb3J0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQnV0dG9uID09PSAnY29tcGxldGVkJyAmJiB0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW46IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFNlYXJjaFRhc2tzVmFsdWUodmFsdWUpO1xuICAgICAgICBzZXRUYXNrcyh0b2Rvcyk7XG4gICAgfTtcblxuICAgIC8qIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIHRhc2sgZmlsdGVyc1xuICAgICAqIGl0IGluY2x1ZGVzIGJ1dHRvbnMgZm9yIHNlYXJjaCBhbmQgZmlsdGVyaW5nIG1vZHVsZXNcbiAgICAgKiDQs9GA0YPQv9C/0LAg0YTRg9C90LrRhtC40Lkg0L/QviDRgNCw0LHQvtGC0LUg0YEg0YTQuNC70YzRgtGA0LDQvNC4INC30LDQtNCw0L3QuNC5XG4gICAgICog0LLQutC70Y7Rh9Cw0LXRgiDQutC90L7Qv9C60Lgg0LzQvtC00YPQu9GPINC/0L7QuNGB0LrQsCDQuCDRhNC40LvRjNGC0YDQsNGG0LjQuFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNldEJ1dHRvbkFzQWN0aXZlIC0gc2V0cyB0aGUgYWN0aXZlIGJ1dHRvbiBmb3IgdGhlIGZpbHRlciBvciBzZWFyY2hcbiAgICAgKiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQutC90L7Qv9C60YMg0LDQutGC0LjQstC90L7QuSDQtNC70Y8g0LzQvtC00YPQu9C10Lkg0L/QvtC40YHQutCwINC4INGE0LjQu9GM0YLRgNCw0YbQuNC4INC30LDQtNCw0L3QuNC5XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gY3VycmVudCBidXR0b25cbiAgICAgKiDRgtC10LrRg9GJ0LDRjyDQutC90L7Qv9C60LBcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgc2V0QnV0dG9uQXNBY3RpdmUgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1maWx0ZXInKSxcbiAgICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tc2VhcmNoJyksXG4gICAgICAgIF07XG4gICAgICAgIGJ1dHRvbnMubWFwKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbWVGaWx0ZXJUeXBlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSA9PT0gdHlwZTtcbiAgICAgICAgICAgIGlmIChidXR0b24gPT09IHRhcmdldCB8fCBzYW1lRmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc2hvd0FsbFRhc2tzIC0gc2hvd3MgYWxsIHRhc2tzIG9uIHRoZSBwYWdlXG4gICAgICog0L/QvtC60LDQt9GL0LLQsNC10YIg0LLRgdC1INC30LDQtNCw0L3QuNGPINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IC0gY3VycmVudCBidXR0b24gKGFsbClcbiAgICAgKiDRgtC10LrRg9GJ0LDRjyDQutC90L7Qv9C60LAgKNCy0YHQtSlcbiAgICAgKiBTVEFURTogc2V0VGFza3MsIHNldEZpbHRlckJ1dHRvbiwgc2V0U2VhcmNoVGFza3NWYWx1ZVxuICAgICAqICovXG5cbiAgICBjb25zdCBzaG93QWxsVGFza3MgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc107XG4gICAgICAgIGNvbnN0IGFsbCA9IHRvZG9zLm1hcCgodG9kbykgPT4gT2JqZWN0LmFzc2lnbih0b2RvLCB7IGhpZGRlbjogZmFsc2UgfSkpO1xuICAgICAgICBzZXRCdXR0b25Bc0FjdGl2ZSh0YXJnZXQpO1xuICAgICAgICBzZXRUYXNrcyhhbGwpO1xuICAgICAgICBzZXRGaWx0ZXJCdXR0b24oJ2FsbCcpO1xuICAgICAgICBzZXRTZWFyY2hUYXNrc1ZhbHVlKCcnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNob3dBY3RpdmVUYXNrcyAtIHNob3dzIGFjdGl2ZSB0YXNrcyBvbiB0aGUgcGFnZVxuICAgICAqINC/0L7QutCw0LfRi9Cy0LDQtdGCINCw0LrRgtC40LLQvdGL0LUg0LfQsNC00LDQvdC40Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gLSBjdXJyZW50IGJ1dHRvbiAoYWN0aXZlcylcbiAgICAgKiDRgtC10LrRg9GJ0LDRjyDQutC90L7Qv9C60LAgKNCw0LrRgtC40LLQvdGL0LUpXG4gICAgICogU1RBVEU6IHNldFRhc2tzLCBzZXRGaWx0ZXJCdXR0b24sIHNldFNlYXJjaFRhc2tzVmFsdWVcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgc2hvd0FjdGl2ZVRhc2tzID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbLi4udGFza3NdO1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0b2Rvcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbiB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0QnV0dG9uQXNBY3RpdmUodGFyZ2V0KTtcbiAgICAgICAgc2V0VGFza3MoYWN0aXZlKTtcbiAgICAgICAgc2V0RmlsdGVyQnV0dG9uKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0U2VhcmNoVGFza3NWYWx1ZSgnJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzaG93SW1wb3J0YW50VGFza3MgLSBzaG93cyBpbXBvcnRhbnQgdGFza3Mgb24gdGhlIHBhZ2VcbiAgICAgKiDQv9C+0LrQsNC30YvQstCw0LXRgiDQstGB0LUg0LLQsNC20L3Ri9C1INC30LDQtNCw0L3QuNGPINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IC0gY3VycmVudCBidXR0b24gKGltcG9ydGFudClcbiAgICAgKiDRgtC10LrRg9GJ0LDRjyDQutC90L7Qv9C60LBcbiAgICAgKiBTVEFURTogc2V0VGFza3MsIHNldEZpbHRlckJ1dHRvbiwgc2V0U2VhcmNoVGFza3NWYWx1ZVxuICAgICAqICovXG5cbiAgICBjb25zdCBzaG93SW1wb3J0YW50VGFza3MgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc107XG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IHRvZG9zLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YXNrLmltcG9ydGFudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbiB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGFza3MoaW1wb3J0YW50KTtcbiAgICAgICAgc2V0QnV0dG9uQXNBY3RpdmUodGFyZ2V0KTtcbiAgICAgICAgc2V0RmlsdGVyQnV0dG9uKCdpbXBvcnRhbnQnKTtcbiAgICAgICAgc2V0U2VhcmNoVGFza3NWYWx1ZSgnJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzaG93Q29tcGxldGVkVGFza3MgLSBzaG93cyBjb21wbGV0ZWQgdGFza3Mgb24gdGhlIHBhZ2VcbiAgICAgKiDQv9C+0LrQsNC30YvQstCw0LXRgiDQstGB0LUg0LfQsNCy0LXRgNGI0LXQvdC90YvQtSDQt9Cw0LTQsNC90LjRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAtIGN1cnJlbnQgYnV0dG9uIChjb21wbGV0ZWQpXG4gICAgICog0YLQtdC60YPRidCw0Y8g0LrQvdC+0L/QutCwICjQstGL0L/QvtC70L3QtdC90L3Ri9C1KVxuICAgICAqIENIQU5HRSBTVEFURTogc2V0VGFza3MsIHNldEZpbHRlckJ1dHRvbiwgc2V0U2VhcmNoVGFza3NWYWx1ZVxuICAgICAqICovXG5cbiAgICBjb25zdCBzaG93Q29tcGxldGVkVGFza3MgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc107XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gdG9kb3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRCdXR0b25Bc0FjdGl2ZSh0YXJnZXQpO1xuICAgICAgICBzZXRUYXNrcyhjb21wbGV0ZSk7XG4gICAgICAgIHNldEZpbHRlckJ1dHRvbignY29tcGxldGVkJyk7XG4gICAgICAgIHNldFNlYXJjaFRhc2tzVmFsdWUoJycpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGZ1bmN0aW9ucyBmb3IgY29udHJvbGxlZCBjb21wb25lbnRzICh0b2RvLWxpc3Qvc2VuZClcbiAgICAgKiDRhNGD0L3QutGG0LjQuCDQv9C+INGA0LDQsdC+0YLQtSDRgSDQutC+0L3RgtGA0L7Qu9C40YDRg9C10LzRi9C80Lgg0LrQvtC80L/QvtC90LXQvdGC0LDQvNC4INC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC30LDQtNCw0L3QuNGPXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25JbnB1dFRpdGxlIC0gY29uZmlndXJpbmcgdGhlIHRhc2sgaGVhZGVyIGJlZm9yZSBzZW5kaW5nXG4gICAgICog0LLQsNC70LjQtNCw0YbQuNGPINC4INGB0L7RhdGA0LDQvdC10L3QuNC1INC30LDQs9C+0LvQvtCy0LrQsCDQsdGD0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINC/0LXRgNC10LQg0L7RgtC/0YDQsNCy0LrQvtC5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdXNlci1lbnRlcmVkIHZhbHVlXG4gICAgICog0LLQstC+0LTQuNC80L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzdWJtaXRUaXRsZVxuICAgICAqICovXG5cbiAgICBjb25zdCBvbklucHV0VGl0bGUgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4gICAgICAgIHNldFN1Ym1pdFRpdGxlKHZhbHVlKTtcbiAgICAgICAgc2VuZFZhbGlkYXRpb24oJ3RpdGxlJyk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uSW5wdXREZXNjcmlwdGlvbiAtIGNvbmZpZ3VyaW5nIHRoZSB0YXNrIGNvbnRlbnQgYmVmb3JlIHNlbmRpbmdcbiAgICAgKiDQstCw0LvQuNC00LDRhtC40Y8g0Lgg0YHQvtGF0YDQsNC90LXQvdC40LUg0L7Qv9C40YHQsNC90LjRjyDQsdGD0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINC/0LXRgNC10LQg0L7RgtC/0YDQsNCy0LrQvtC5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdXNlci1lbnRlcmVkIHZhbHVlXG4gICAgICog0LLQstC+0LTQuNC80L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzdWJtaXREZXNjcmlwdGlvblxuICAgICAqICovXG5cbiAgICBjb25zdCBvbklucHV0RGVzY3JpcHRpb24gPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4gICAgICAgIHNldFN1Ym1pdERlc2NyaXB0aW9uKHZhbHVlKTtcbiAgICAgICAgc2VuZFZhbGlkYXRpb24oJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uQ2hhbmdlSW1wb3J0YW50IC0gc2V0dGluZyB0aGUgaW1wb3J0YW5jZSBvZiB0aGUgdGFza1xuICAgICAqINGB0L7RhdGA0LDQvdC10L3QuNC1INGE0LvQsNCz0LAg0L4g0LLQsNC20L3QvtGB0YLQuCDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgLSB1c2VyLXNlbGVjdGVkIGZsYWdcbiAgICAgKiDRgtC10LrRg9GJ0LjQuSDRhNC70LDQsyDRg9GB0YLQsNC90L7QstC70LXQvdC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvFxuICAgICAqIENIQU5HRSBTVEFURTogc3VibWl0SW1wb3J0YW50XG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uQ2hhbmdlSW1wb3J0YW50ID0gKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgIGlmIChzdWJtaXRDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHNldFN1Ym1pdENvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3VibWl0SW1wb3J0YW50KGNoZWNrZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25DaGFuZ2VJbXBvcnRhbnQgLSBzZXRzIHdoZXRoZXIgdGhlIHRhc2sgaXMgY29tcGxldGVkXG4gICAgICog0YHQvtGF0YDQsNC90LXQvdC40LUg0YTQu9Cw0LPQsCDQviDQstGL0L/QvtC70L3QtdC90LjQuCDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgLSB1c2VyLXNlbGVjdGVkIGZsYWdcbiAgICAgKiDRgtC10LrRg9GJ0LjQuSDRhNC70LDQsyDRg9GB0YLQsNC90L7QstC70LXQvdC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvFxuICAgICAqIENIQU5HRSBTVEFURTogc3VibWl0Q29tcGxldGVkXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uQ2hhbmdlQ29tcGxldGVkID0gKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgIGlmIChzdWJtaXRJbXBvcnRhbnQpIHtcbiAgICAgICAgICAgIHNldFN1Ym1pdEltcG9ydGFudChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3VibWl0Q29tcGxldGVkKGNoZWNrZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25EZWFkbGluZUVuYWJsZSAtIHNldHMgdGFzayBkZWFkbGluZVxuICAgICAqINGB0L7RhdGA0LDQvdC10L3QuNC1INGE0LvQsNCz0LAsINC60L7RgtC+0YDRi9C5INGA0LXRiNCw0LXRgiDQv9C+0LrQsNC30YvQstCw0YLRjCDQu9C4INC60YDQsNC50L3QuNC5INGB0YDQvtC6INC30LDQtNCw0L3QuNGPXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjaGVja2VkIC0gdXNlci1zZWxlY3RlZCBmbGFnXG4gICAgICog0YPRgdGC0LDQvdC+0LLQu9C10L3QvdC+0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0LfQvdCw0YfQtdC90LjQtVxuICAgICAqIENIQU5HRSBTVEFURTogc2V0U3VibWl0RGVhZGxpbmVcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgb25EZWFkbGluZUVuYWJsZSA9ICh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICBzZXRTdWJtaXREZWFkbGluZShjaGVja2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBjaGFuZ2UgdGhlbWVcbiAgICAgKiDQuNC30LzQtdC90LXQvdC40LUg0YLQtdC80YtcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkNoYW5nZVRoZW1lIC0gQ2hhbmdlIHRoZW1lIGZvciBhcHBcbiAgICAgKiDQuNC30LzQtdC90LXQvdC40LUg0YLQtdC80Ysg0LIg0L/RgNC40LvQvtC20LXQvdC40LhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBvcHRpb24gZWxlbWVudFxuICAgICAqINCy0YvQsdGA0LDQvdC90L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICogQ0hBTkdFIFNUQVRFOiB2YWx1ZSwgdGhlbWVcbiAgICAgKiBDSEFOR0UgU1RPUkFHRTogdGhlbWVcbiAgICAgKi9cblxuICAgIGNvbnN0IG9uQ2hhbmdlVGhlbWUgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIHNldFRoZW1lKHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIHZhbGlkYXRlXG4gICAgICog0LLQsNC70LjQtNCw0YbQuNGPXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gdmFsaWRhdGUgLSB2YWxpZGF0aW9uIG9mIHRoZSBoZWFkZXIgYW5kIGNvbnRlbnQgdmFsdWVzIGZvciB0aGUgdGFza1xuICAgICAqINCy0LDQu9C40LTQsNGG0LjRjyDQstCy0LXQtNC10L3QvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNGPXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gaW5wdXQgdmFsdWVcbiAgICAgKiDQt9C90LDRh9C10L3QuNC1INCy0LLQtdC00LXQvdC90L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gaGVhZGluZyBvciBjb250ZW50XG4gICAgICog0LfQsNCz0L7Qu9C+0LLQvtC6INC40LvQuCDQvtC/0LjRgdCw0L3QuNC1XG4gICAgICogQHBhcmFtIHtib29sZWFufSBzdHJpY3QgLSBzdHJpY3QgbW9kZSBmb3IgdmFsaWRhdGlvblxuICAgICAqINGB0YLRgNC+0LPQuNC5INGA0LXQttC40Lwg0LTQu9GPINCy0LDQu9C40LTQsNGG0LjQuFxuICAgICAqIEByZXR1cm4geyhzdHJpbmd8Ym9vbGVhbil9IC0gZWRpdGVkIHN0cmluZyBvciBmYWxzZVxuICAgICAqICovXG5cbiAgICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZSwgY29udGVudCwgc3RyaWN0ID0gZmFsc2UpID0+IHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IC9bXiAwLTlhLXrQsC3Rj9GRIT8kJSYqKCkrPS98LiwtXS9naTtcbiAgICAgICAgY29uc3QgaGF2ZUluY29ycmVjdFN5bWJvbHMgPSB2YWx1ZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUudHJpbSgpLnJlcGxhY2UocGF0dGVybiwgJycpO1xuICAgICAgICBpZiAoc3RyaWN0ICYmIGhhdmVJbmNvcnJlY3RTeW1ib2xzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRlbnQgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubGVuZ3RoID49IDcgPyByZXN1bHQgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPj0gMTAgPyByZXN1bHQgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzZW5kVmFsaWRhdGlvbiAtIGl0IGRvZXMgdmFsaWRhdGlvbiBiZWZvcmUgc2VuZGluZ1xuICAgICAqINC00LXQu9Cw0LXRgiDQstCw0LvQuNC00LDRhtC40Y4g0L/QtdGA0LXQtCDQvtGC0L/RgNCw0LLQutC+0LlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIHdoaWNoIGNvbnRlbnQgd2lsbCBiZSBjaGVja2VkXG4gICAgICog0L/RgNC+0LLQtdGA0Y/QtdC80YvQuSDQutC+0L3RgtC10L3RglxuICAgICAqIENIQU5HRSBTVEFURTogc2V0U2VuZGluZ0RhdGFJc1ZhbGlkXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNlbmRWYWxpZGF0aW9uID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB2YWxpZGF0ZShzdWJtaXRUaXRsZUVsZW1lbnQudmFsdWUsICd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbGlkYXRlKHN1Ym1pdERlc2NFbGVtZW50LnZhbHVlLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRUaXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRUaXRsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2VuZGluZ0RhdGFJc1ZhbGlkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgaWYgKCFkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHN1Ym1pdERlc2NFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzdWJtaXREZXNjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJtaXREZXNjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0RGVzY0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNlbmRpbmdEYXRhSXNWYWxpZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlICYmIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBzZXRTZW5kaW5nRGF0YUlzVmFsaWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBkYXRlIGZvcm1hdFxuICAgICAqINGE0L7RgNC80LDRgiDQtNCw0YLRi1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGRhdGVGb3JtYXQgLSBjcmVhdGVzIGEgZGF0ZSBmb3JtYXRcbiAgICAgKiDRgdC+0LfQtNCw0LXRgiDQutC+0YDRgNC10LrRgtC90YvQuSDRhNC+0YDQvNCw0YIg0LTQsNGC0YtcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBzb21lIGRhdGUgKGN1cnJlbnQgZGF0ZSBvZiBkZWFkbGluZSlcbiAgICAgKiDQvdC10LrQvtGC0L7RgNCw0Y8g0LTQsNGC0LBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGRlZmluZXMgdGhlIHR5cGUgb2YgZm9ybWF0dGluZ1xuICAgICAqINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40LUg0LTQu9GPINGB0YLQsNGA0YLQsCDQuNC70Lgg0LrRgNCw0LnQvdC10LPQviDRgdGA0L7QutCwXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIGZvcm1hdHRlZCBkYXRhXG4gICAgICog0LLQvtC30LLRgNCw0YnQsNC10YIg0L7RgtGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC90YPRjiDQtNCw0YLRg1xuICAgICAqICovXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gKGRhdGUsIHR5cGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmd1YWdlLCB7XG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnLCcsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkZWFkbGluZScgJiYgIXN1Ym1pdENvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmVUaW1lc3RhbXAgPSArZGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkZWFkbGluZVRpbWVzdGFtcCAtIGN1cnJlbnRUaW1lc3RhbXApIC8gMTAwMCk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzTGVmdCA9IGhvdXJzIC0gZGF5c0xlZnQgKiAyNDtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNMZWZ0ID0gbWludXRlcyAtIGhvdXJzICogNjA7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdCA9IHNlY29uZHMgLSBtaW51dGVzICogNjA7XG4gICAgICAgICAgICBpZiAoZGF5c0xlZnQgPCAwIHx8IGhvdXJzTGVmdCA8IDAgfHwgbWludXRlc0xlZnQgPCAwIHx8IHNlY29uZHNMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnMGQgMGggMG0gMHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2RheXNMZWZ0fdC0ICR7aG91cnNMZWZ0fdGHICR7bWludXRlc0xlZnR90LwgJHtzZWNvbmRzTGVmdH3RgWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwZCAwaCAwbSAwcyc7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogYWRkIHRhc2tcbiAgICAgKiDQtNC+0LHQsNCy0LvQtdC90LjQtSDQt9Cw0LTQsNC90LjRj1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGdldFR5cGVPZkZpbHRlciAtIGdldCB0eXBlIG9mIGZpbHRlclxuICAgICAqINC+0L/RgNC10LTQtdC70Y/QtdGCINGB0YLQvtC40YIg0LvQuCDQt9Cw0LTQsNGH0LUg0L/QvtGP0LLQuNGC0YzRgdGPINC40LvQuCDQvdC10YIg0L/RgNC4INC10LUg0LTQvtCx0LDQstC70LXQvdC40LhcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIHRydWUgKGlmIG5lZWQgaGlkZSB0YXNrKSBvciBmYWxzZVxuICAgICAqL1xuXG4gICAgY29uc3QgZ2V0VHlwZU9mRmlsdGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZmlsdGVyQnV0dG9uID09PSAnYWN0aXZlJyAmJiBzdWJtaXRDb21wbGV0ZWQ7XG4gICAgICAgIGNvbnN0IGlzQ29tcGxldGVkID0gZmlsdGVyQnV0dG9uID09PSAnY29tcGxldGVkJyAmJiAhc3VibWl0Q29tcGxldGVkO1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IGZpbHRlckJ1dHRvbiA9PT0gJ2ltcG9ydGFudCcgJiYgIXN1Ym1pdEltcG9ydGFudDtcbiAgICAgICAgaWYgKGlzQWN0aXZlIHx8IGlzQ29tcGxldGVkIHx8IGlzSW1wb3J0YW50KSB7XG4gICAgICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWRkZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBhZGRUYXNrIC0gQWRkaW5nIHRhc2sgZm9yIGFwcFxuICAgICAqINC00L7QsdCw0LLQu9C10L3QuNC1INC30LDQtNCw0YfQuCDQsiDQv9GA0LjQu9C+0LbQtdC90LjQtVxuICAgICAqIENIQU5HRSBTVEFURTogc2VuZEJ1dHRvbiwgc2V0U3VibWl0VGl0bGUsIHNldFN1Ym1pdERlc2NyaXB0aW9uXG4gICAgICogc2V0U3VibWl0Q29tcGxldGVkLCBzZXRTdWJtaXRJbXBvcnRhbnQsIHNldFN1Ym1pdERlYWRsaW5lLCBzZXRUYXNrc1xuICAgICAqIHNldENyZWF0ZWRUYXNrVGltZSwgc2V0RGVhZGxpbmVUYXNrXG4gICAgICogQ0hBTkdFIFNUT1JBR0U6IHRhc2tzXG4gICAgICovXG5cbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHRhc2tzLmxlbmd0aCA/IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLmlkICsgMSA6IDE7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdmFsaWRhdGUoc3VibWl0VGl0bGUsICd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbGlkYXRlKHN1Ym1pdERlc2NyaXB0aW9uLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGRhdGVGb3JtYXQobmV3IERhdGUoKSwgJ3N0YXJ0Jyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBkYXRlRm9ybWF0KHNlbGVjdGVkRGF0ZSwgJ2RlYWRsaW5lJyk7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IHN1Ym1pdEltcG9ydGFudDtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gc3VibWl0Q29tcGxldGVkO1xuICAgICAgICBjb25zdCBoaWRkZW4gPSBnZXRUeXBlT2ZGaWx0ZXIoKTtcbiAgICAgICAgY29uc3QgYWRkZWQgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbXBvcnRhbnQsXG4gICAgICAgICAgICBjb21wbGV0ZWQsXG4gICAgICAgICAgICBjcmVhdGVkLFxuICAgICAgICAgICAgZGVhZGxpbmUsXG4gICAgICAgICAgICBoaWRkZW4sXG4gICAgICAgICAgICBkZWFkbGluZVRpbWVTdGFtcDogc2VsZWN0ZWREYXRlLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNlbmRpbmdEYXRhSXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBbLi4udGFza3NdO1xuICAgICAgICAgICAgdG9kb3MucHVzaChhZGRlZCk7XG4gICAgICAgICAgICBzZW5kQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICBzZXRTdWJtaXRUaXRsZSgnJyk7XG4gICAgICAgICAgICBzZXRTdWJtaXREZXNjcmlwdGlvbignJyk7XG4gICAgICAgICAgICBzZXRTdWJtaXRDb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U3VibWl0SW1wb3J0YW50KGZhbHNlKTtcbiAgICAgICAgICAgIHNldFN1Ym1pdERlYWRsaW5lKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFRhc2tzKHRvZG9zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgICAgICBzdWJtaXRUaXRsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgc3VibWl0VGl0bGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZhbGlkJyk7XG4gICAgICAgICAgICBzdWJtaXREZXNjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBzdWJtaXREZXNjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12YWxpZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4udG9hc3RzXTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQlNCw0L3QvdGL0LUg0L3QtSDQsdGD0LTRg9GCINC+0YLQv9GA0LDQstC70LXQvdGLJyA6ICdObyBkYXRhIHdpbGwgYmUgc2VudCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGDQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhS4gXG4gICAgICAgICAgICAgICAgICAgINCS0LXRgNC+0Y/RgtC90L4g0LLRiyDQstCy0LXQu9C4INC90LUg0LrQvtGA0YDQtdC60YLQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LvQtdC5YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2VuZGluZyBkYXRhLlxuICAgICAgICAgICAgICAgICAgICBZb3UgcHJvYmFibHkgZW50ZXJlZCBpbmNvcnJlY3QgZmllbGQgdmFsdWVzYCxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnYmctZGFuZ2VyIHRleHQtbGlnaHQnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogbGFuZ3VhZ2UgPT09ICdydScgPyAn0J7RiNC40LHQutCwJyA6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2VzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRvYXN0cyhtZXNzYWdlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogYSBncm91cCBvZiBmdW5jdGlvbnMgdGhhdCBkZWZpbmUgZWRpdGFibGUgY29udGVudFxuICAgICAqINCz0YDRg9C/0L/QsCDRhNGD0L3QutGG0LjQuSDQv9C+INGA0LDQsdC+0YLQtSDRgSDRgNC10LTQsNC60YLQuNGA0YPQtdC80YvQvCDRgdC+0LTQtdGA0LbQuNC80YvQvCDQt9Cw0LTQsNC90LjRj1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNldEVkaXRhYmxlIC0gc2V0dGluZyB1cCBlZGl0YWJsZSBjb250ZW50IGluIHRoZSBzdGF0ZVxuICAgICAqINC90LDRgdGC0YDQsNC40LLQsNC10YIg0Lgg0YHQvtGF0YDQsNC90Y/QtdGCINGA0LXQtNCw0LrRgtC40YDRg9C10LzRi9C5INCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0LrQvtC90YLQtdC90YJcbiAgICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxhbnkpfSB0YXJnZXQgLSAgZXhwZWN0ZWQgJ3NwYW4nIG9yICdwJyBlbGVtZW50IChoZWFkaW5nIG9yIGNvbnRlbnQpXG4gICAgICog0L7QttC40LTQsNC10YLRgdGPINGD0LLQuNC00LXRgtGMINC30LDQs9C+0LvQvtCy0L7QuiDQt9Cw0LTQsNGH0Lgg0Lgg0LXQtSDQv9Cw0YDQsNCz0YDQsNGEXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgd2l0aCB0d28gSFRNTEVsZW1lbnRzIC0gaGVhZGluZyBhbmQgY29udGVudCBvZiB0YXNrXG4gICAgICog0LzQsNGB0YHQuNCyINGBINC30LDQs9C+0LvQvtCy0LrQvtC8INC4INC/0LDRgNCw0LPRgNCw0YTQvtC8INC30LDQtNCw0YfQuCDQsiDQstC40LTQtSBIVE1MRWxlbWVudHNcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHNldEVkaXRhYmxlQ29udGVudFxuICAgICAqINCk0YPQvdC60YbQuNGPINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LrQsNC6INC/0YDQuCDRidC10LvRh9C60LUg0L/QviDQutC90L7Qv9C60LUgXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFwiXG4gICAgICog0YLQsNC6INC4INC/0YDQuCDQtNCy0L7QudC90L7QvCDRidC10LvRh9C60LUg0L3QsCDQvtCx0LvQsNGB0YLQuCDQt9Cw0LTQsNC90LjRj1xuICAgICAqICovXG5cbiAgICBjb25zdCBzZXRFZGl0YWJsZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkZW50aWZ5XScpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXQ9XCJoZWFkaW5nXCJdJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXQ9XCJjb250ZW50XCJdJyk7XG4gICAgICAgICAgICBzZXRFZGl0YWJsZUNvbnRlbnQoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U3RhdGUuaGVhZGluZyAhPT0gaGVhZGluZykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGUuaGVhZGluZz8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlLmNvbnRlbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLCB7IGhlYWRpbmcsIGNvbnRlbnQgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFtoZWFkaW5nLCBjb250ZW50XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBkZWxldGVDb250ZW50ZWRpdGFibGVBdHRyIC0gZGVsZXRpbmcgZWRpdGFibGUgY29udGVudFxuICAgICAqIGZyb20gdGhlIGhlYWRlciBvciBjb250ZW50IGlmIHRoZSB0aW1lclxuICAgICAqICh0aGUgdGltZXIgZm9yIHN3aXRjaGluZyB0aGUgZWRpdGFibGUgYXR0cmlidXRlKSBpcyBub3QgZGVsZXRlZFxuICAgICAqINGD0LTQsNC70Y/QtdGCINCw0YLRgNC40LHRg9GCICdjb250ZW50ZWRpdGFibGUnINGDINGN0LvQtdC80LXQvdGC0L7QsiDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2SGVhZGluZyAtIHByZXZpb3VzIGl0ZW0gZnJvbSB0aGUgc3RhdGVcbiAgICAgKiDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQt9Cw0LPQvtC70L7QstC+0Log0LfQsNC00LDRh9C4INC60L7RgtC+0YDRi9C5INCx0YvQuyDQsiDRgNC10LbQuNC80LUg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZDb250ZW50IC0gcHJldmlvdXMgaXRlbSBmcm9tIHRoZSBzdGF0ZVxuICAgICAqINC/0YDQtdC00YvQtNGD0YnQuNC5INC/0LDRgNCw0LPRgNCw0YQg0LfQsNC00LDRh9C4INC60L7RgtC+0YDRi9C5INCx0YvQuyDQsiDRgNC10LbQuNC80LUg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xuICAgICAqICovXG5cbiAgICBjb25zdCBkZWxldGVDb250ZW50ZWRpdGFibGVBdHRyID0gKHByZXZIZWFkaW5nLCBwcmV2Q29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbnRlbnQgfSA9IGVkaXRhYmxlQ29udGVudDtcbiAgICAgICAgaWYgKGhlYWRpbmcgPT09IHByZXZIZWFkaW5nIHx8IGNvbnRlbnQgPT09IHByZXZDb250ZW50KSB7XG4gICAgICAgICAgICBwcmV2SGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgcHJldkNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gaXNFZGl0aW5nVGFza1N1Y2Nlc3NmdWxseSAtIGNoZWNrcyB0aGUgY29ycmVjdG5lc3Mgb2YgdGhlIGlucHV0IGRhdGFcbiAgICAgKiDQv9GA0L7QstC10YDQutCwINC60L7RgNGA0LXQutGC0L3QvtGB0YLQuCDQstCy0LXQtNC10L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0LfQvdCw0YfQtdC90LjQuSDQsiDRgNC10LbQuNC80LUg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoZWFkaW5nIC0gVGFzayB0aXRsZVxuICAgICAqINC30LDQs9C+0LvQvtCy0L7QuiDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGFzayBkZXNjcmlwdGlvblxuICAgICAqINC+0L/QuNGB0LDQvdC40LUg0LfQsNC00LDRh9C4XG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gYXJyYXkgd2l0aCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAgICAgKiDQvNCw0YHRgdC40LIg0YEg0YLQtdC60YHRgtC+0LLRi9C8INGB0L7QtNC10YDQttC40LzRi9C8INC30LDQs9C+0LvQvtCy0LrQsCDQuCDQvtC/0LjRgdCw0L3QuNGPINC30LDQtNCw0YfQuFxuICAgICAqIENIQU5HRSBTVEFURTogc2V0VG9hc3RzXG4gICAgICogKi9cblxuICAgIGNvbnN0IGlzRWRpdGluZ1Rhc2tTdWNjZXNzZnVsbHkgPSAoaGVhZGluZywgY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSB2YWxpZGF0ZShoZWFkaW5nLnRleHRDb250ZW50LCAndGl0bGUnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gdmFsaWRhdGUoY29udGVudC50ZXh0Q29udGVudCwgJ2Rlc2NyaXB0aW9uJywgdHJ1ZSk7XG4gICAgICAgIGlmICghdGl0bGVUZXh0IHx8ICFkZXNjcmlwdGlvblRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRvYXN0c107XG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydScgPyAn0JTQsNC90L3Ri9C1INC90LUg0LHRg9C00YPRgiDRgdC+0YXRgNCw0L3QtdC90YsnIDogJ1RoZSBkYXRhIHdpbGwgbm90IGJlIHNhdmVkJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Ci0LXQutGB0YIg0LfQsNC00LDQvdC40Y8g0YHQu9C40YjQutC+0Lwg0LzQsNC7INC40LvQuCDRgdC+0LTQtdGA0LbQuNGCINC90LUg0LrQvtGA0YDQtdC60YLQvdGL0LUg0YHQuNC80LLQvtC70YsnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdUaGUgdGFzayB0ZXh0IGlzIHRvbyBzbWFsbCBvciBjb250YWlucyBpbmNvcnJlY3QgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2JnLWRhbmdlciB0ZXh0LWxpZ2h0JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGxhbmd1YWdlID09PSAncnUnID8gJ9Ce0YjQuNCx0LrQsCcgOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlcy5sZW5ndGggKyAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUb2FzdHMobWVzc2FnZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFtmYWxzZV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudEJlZm9yZUVkaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBjb250ZW50QmVmb3JlRWRpdDtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSXNTYW1lID0gdGl0bGUgPT09IGhlYWRpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklzU2FtZSA9IGRlc2NyaXB0aW9uID09PSBjb250ZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKCF0aXRsZUlzU2FtZSB8fCAhZGVzY3JpcHRpb25Jc1NhbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi50b2FzdHNdO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnID8gJ9CX0LDQtNCw0L3QuNC1INC+0YLRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QvicgOiAnVGhlIHRhc2sgaGFzIGJlZW4gZWRpdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9CX0LDQtNCw0L3QuNC1INGB0L7RhdGA0LDQvdC10L3QviDQuCDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C90L4g0LIg0YLQtdC60YPRidC10Lwg0LLQuNC00LUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnVGhlIHRhc2sgaGFzIGJlZW4gc2F2ZWQgYW5kIHdpbGwgYmUgYXZhaWxhYmxlIGluIGl0cyBjdXJyZW50IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnYmctc3VjY2VzcyB0ZXh0LWxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQo9GB0L/QtdGFJyA6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2VzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VG9hc3RzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbdGl0bGVUZXh0LCBkZXNjcmlwdGlvblRleHRdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZWRpdGFibGVUYXNrT3V0IC0gZGVsZXRlICdjb250ZW50ZWRpdGFibGUnIGF0dHIgYWZ0ZXIgZm9jdXNcbiAgICAgKiDRg9C00LDQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiAnY29udGVudGVkaXRhYmxlJyDQv9C+0YHQu9C1INC/0L7RgtC10YDQuCDRhNC+0LrRg9GB0LAg0Y3Qu9C10LzQtdC90YLQvtC8XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gJ3NwYW4nIG9yICdwJyBlbGVtZW50IChoZWFkaW5nIG9yIGNvbnRlbnQpXG4gICAgICog0Y3Qu9C10LzQtdC90YIgJ3NwYW4nINC40LvQuCAncCcg0LfQsNCz0L7Qu9C+0LLQutCwINC40LvQuCDQutC+0L3RgtC10L3RgtCwINC30LDQtNCw0YfQuFxuICAgICAqIENIQU5HRSBTVEFURTogdGFza3MsIHNldEN1cnJlbnRFZGl0YWJsZUJ1dHRvblxuICAgICAqIFNFVCBTVE9SQUdFOiB0YXNrc1xuICAgICAqIEVWRU5UOiBvbkJsdXJcbiAgICAgKiAqL1xuXG4gICAgY29uc3QgZWRpdGFibGVUYXNrT3V0ID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb250ZW50IH0gPSBlZGl0YWJsZUNvbnRlbnQ7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IGhlYWRpbmcgfHwgdGFyZ2V0ID09PSBjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gaGVhZGluZy5jbG9zZXN0KCdbZGF0YS1pZGVudGlmeV0nKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkZW50aWZ5JykpO1xuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBbLi4udGFza3NdLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uXSA9IGlzRWRpdGluZ1Rhc2tTdWNjZXNzZnVsbHkoaGVhZGluZywgY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIC8qIG11c3QgYmUgaW4gYXN5bmNocm9ub3VzIG1vZGUgKi9cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uKG51bGwpLCAyNTApO1xuICAgICAgICAgICAgc2V0VGFza3ModG9kb3MpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZWRpdGFibGVUYXNrSW4gLSByZW1vdmluZyBhbiAnY29udGVudGVkaXRhYmxlJyBhdHRyaWJ1dGVcbiAgICAgKiBmcm9tIG9uZSBvZiB0d28gZWxlbWVudHMuIERlcGVuZHMgb24gd2hpY2ggZWxlbWVudCBpcyBpbiBmb2N1cy5cbiAgICAgKiBJZiB0aGUgdGltZXIgaXMgYWN0aXZlLCBkZWxldGVzIGl0IGJlY2F1c2UgdGhlIGl0ZW0gaXMgaW4gZWRpdCBtb2RlXG4gICAgICog0YPQtNCw0LvRj9C10YIg0LDRgtGA0LjQsdGD0YIgJ2NvbnRlbnRlZGl0YWJsZScg0YMg0L7QtNC90L7Qs9C+INC40Lcg0LTQstGD0YUg0Y3Qu9C10LzQtdC90YLQvtCyXG4gICAgICog0YLQsNC60LbQtSDRgdCx0YDQsNGB0YvQstCw0LXRgiDRgtCw0LnQvNC10YAsINC60L7RgtC+0YDRi9C5INC00L7Qu9C20LXQvSDQsdGL0Lsg0YPQtNCw0LvQuNGC0Ywg0YLQvtGCINC20LUg0LDRgtGA0LjQsdGD0YJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSAnc3Bhbicgb3IgJ3AnIGVsZW1lbnQgKGhlYWRpbmcgb3IgY29udGVudClcbiAgICAgKiDRjdC70LXQvNC10L3RgiAnc3Bhbicg0LjQu9C4ICdwJyDQt9Cw0LPQvtC70L7QstC60LAg0LjQu9C4INC60L7QvdGC0LXQvdGC0LAg0LfQsNC00LDRh9C4XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZXRDdXJyZW50RWRpdGFibGVCdXR0b24sIHNldENvbnRlbnRCZWZvcmVFZGl0XG4gICAgICogRVZFTlQ6IG9uRm9jdXNcbiAgICAgKiAqL1xuXG4gICAgY29uc3QgZWRpdGFibGVUYXNrSW4gPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbnRlbnQgfSA9IGVkaXRhYmxlQ29udGVudDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gaGVhZGluZyB8fCB0YXJnZXQgPT09IGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGVudGlmeV0nKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW50ZXJmYWNlPVwiZWRpdFwiXScpO1xuICAgICAgICAgICAgc2V0Q29udGVudEJlZm9yZUVkaXQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBoZWFkaW5nLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LnRleHRDb250ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50RWRpdGFibGVCdXR0b24oZWRpdEJ0bik7XG4gICAgICAgICAgICBpZiAodG9nZ2xlRWRpdGFibGVBdHRyaWJ1dGVUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b2dnbGVFZGl0YWJsZUF0dHJpYnV0ZVRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGhlYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgaGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBlZGl0YWJsZVRhc2tFbnRyeSAtIGFkZGluZyBhbiAnY29udGVudGVkaXRhYmxlJyBhdHRyaWJ1dGVcbiAgICAgKiB3aGVuIHdpbGwgdGhlIGRvdWJsZSBjbGljayBoYXBwZW4uIElmIHRoZSB0YXNrIGlzIGNvbXBsZXRlZCwgZWRpdGluZyBpcyBub3QgYWxsb3dlZC5cbiAgICAgKiDQtNC+0LHQsNCy0LvRj9C10YIg0LDRgtGA0LjQsdGD0YIgJ2NvbnRlbnRlZGl0YWJsZScg0L/RgNC4INC00LLQvtC50L3QvtC8INC60LvQuNC60LUg0L3QsCDRjdC70LXQvNC10L3RgtC1ICdzcGFuJyDQuNC70LggJ3AnXG4gICAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8YW55KX0gdGFyZ2V0IC0gIGV4cGVjdGVkICdzcGFuJyBvciAncCcgZWxlbWVudCAoaGVhZGluZyBvciBjb250ZW50KVxuICAgICAqINC+0LbQuNC00LDQtdGC0YHRjyAnc3Bhbicg0LjQu9C4ICdwJyDRjdC70LXQvNC10L3RgtGLICjQt9Cw0LPQvtC70L7QstC+0Log0Lgg0L7Qv9C40YHQsNC90LjQtSlcbiAgICAgKiBFVkVOVDogb25Eb3VibGVDbGlja1xuICAgICAqICovXG5cbiAgICBjb25zdCBlZGl0YWJsZVRhc2tFbnRyeSA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzRWRpdGFibGVDb250ZW50ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lZGl0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRlbnRpZnldJyk7XG4gICAgICAgIGNvbnN0IGVkaXRBbGxvdyA9ICF0YXNrPy5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGUnKTtcbiAgICAgICAgaWYgKGlzRWRpdGFibGVDb250ZW50ICYmIGVkaXRBbGxvdykge1xuICAgICAgICAgICAgY29uc3QgW2hlYWRpbmcsIGNvbnRlbnRdID0gc2V0RWRpdGFibGUodGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzSGVhZGluZyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdCcpID09PSAnaGVhZGluZyc7XG4gICAgICAgICAgICBjb25zdCBpc0NvbnRlbnQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXQnKSA9PT0gJ2NvbnRlbnQnO1xuICAgICAgICAgICAgaWYgKGlzSGVhZGluZykge1xuICAgICAgICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGhlYWRpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGVkaXRhYmxlVGFza0V4aXQgLSByZW1vdmluZyBhbiAnY29udGVudGVkaXRhYmxlJyBhdHRyaWJ1dGVcbiAgICAgKiB3aGVuIHByZXNzaW5nIHRoZSBFbnRlciBrZXkuXG4gICAgICog0YPQtNCw0LvRj9C10YIg0LDRgtGA0LjQsdGD0YIgJ2NvbnRlbnRlZGl0YWJsZScg0LrQvtCz0LTQsCDQsdGL0LvQsCDQvdCw0LbQsNGC0LAg0LrQu9Cw0LLQuNGI0LAgRW50ZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSAnc3Bhbicgb3IgJ3AnIGVsZW1lbnQgKGhlYWRpbmcgb3IgY29udGVudClcbiAgICAgKiDQt9Cw0LPQvtC70L7QstC+0Log0LjQu9C4INC+0L/QuNGB0LDQvdC40LVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIGNvZGUgb2YgY3VycmVudCBLZXlcbiAgICAgKiDQutC+0LQg0LrQu9Cw0LLQuNGI0LhcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNoaWZ0S2V5IC0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnc2hpZnQnIGtleSBoYXMgYmVlbiBwcmVzc2VkXG4gICAgICog0LHRi9C70LAg0LvQuCDQt9Cw0LbQsNGC0LAg0LrQu9Cw0LLQuNGI0LAgJ3NoaWZ0J1xuICAgICAqIEVWRU5UOiBvbktleURvd25cbiAgICAgKiAqL1xuXG4gICAgY29uc3QgZWRpdGFibGVUYXNrRXhpdCA9ICh7IHRhcmdldCwgY29kZSwgc2hpZnRLZXkgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbnRlbnQgfSA9IGVkaXRhYmxlQ29udGVudDtcbiAgICAgICAgY29uc3QgdGFyZ2V0SXNFZGl0YWJsZSA9IHRhcmdldCA9PT0gaGVhZGluZyB8fCB0YXJnZXQgPT09IGNvbnRlbnQ7XG4gICAgICAgIGlmICh0YXJnZXRJc0VkaXRhYmxlICYmIGNvZGUgPT09ICdFbnRlcicgJiYgIXNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBoZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBUYXNrIGJ1dHRvbiBldmVudHNcbiAgICAgKiDRgdC+0LHRi9GC0LjRjyDQuNC90YLQtdGA0YTQtdC50YHQsCDQt9Cw0LTQsNC90LjRjyAo0LLQsNC20L3Qviwg0YPQtNCw0LvQuNGC0YwsINCy0YvQv9C+0LvQvdC10L3Qviwg0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25JbXBvcnRhbnQgLSBtYXJrcyB0aGUgdGFzayBhcyBpbXBvcnRhbnQvdW5pbXBvcnRhbnRcbiAgICAgKiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQt9Cw0LTQsNC90LjQtSDQutCw0Log0LLQsNC20L3QvtC1XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gYnV0dG9uIG9mIHRhc2sgKGltcG9ydGFudClcbiAgICAgKiDQutC90L7Qv9C60LAg0LfQsNC00LDQvdC40Y8gKNCy0LDQttC90L4pXG4gICAgICogQ0hBTkdFIFNUQVRFOiB0YXNrc1xuICAgICAqIFNFVCBTVE9SQUdFOiB0YXNrc1xuICAgICAqICovXG5cbiAgICBjb25zdCBvbkltcG9ydGFudCA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRlbnRpZnldJyk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRlbnRpZnknKSk7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gWy4uLnRhc2tzXS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIC8qIGlmIHRoZSBkaXNwbGF5ZWQgdGFza3MgYXJlIGltcG9ydGFudCwgaGlkZSB0aGVtICovXG4gICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBmaWx0ZXJCdXR0b24gPT09ICdpbXBvcnRhbnQnO1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogIXRhc2suaW1wb3J0YW50LFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRhc2tzKHRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgLyogaWYgb25seSBpbXBvcnRhbnQgdGFza3MgYXJlIGRpc3BsYXllZCBhdCB0aGUgbW9tZW50ICovXG4gICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICAvKiBpcyB0aGVyZSBhdCBsZWFzdCBvbmUgd2l0aCBhIGZsYWcgaW1wb3J0YW50OiB0cnVlICovXG4gICAgICAgICAgICBjb25zdCBhcmVUaGVyZUltcG9ydGFudFRhc2tzID0gdG9kb3Muc29tZSgodGFzaykgPT4gdGFzay5pbXBvcnRhbnQgPT09IHRydWUpO1xuICAgICAgICAgICAgLyogaWYgbm90LCBjYWxsIHRoZSBmdW5jdGlvbiBzaG93QWN0aXZlVGFza3MgYW5kIHNob3cgYWxsIGFjdGl2ZSB0YXNrcyAqL1xuICAgICAgICAgICAgaWYgKCFhcmVUaGVyZUltcG9ydGFudFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZVRhc2tzKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhY3RpdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZGVsZXRlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgKHRoaXMgbWF5IGJlIHVzZWZ1bCkgKi9cbiAgICAgICAgaGVhZGluZz8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgY29udGVudD8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uQ29tcGxldGVkIC0gbWFya3MgdGhlIHRhc2sgYXMgY29tcGxldGVkL3VuZmluaXNoZWRcbiAgICAgKiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQt9Cw0LTQsNC90LjQtSDQutCw0Log0LfQsNCy0LXRgNGI0LXQvdC90L7QtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIGJ1dHRvbiBvZiB0YXNrIChjb21wbGV0ZWQpXG4gICAgICog0LrQvdC+0L/QutCwINC30LDQtNCw0L3QuNGPICjQt9Cw0LLQtdGA0YjQtdC90L4pXG4gICAgICogQ0hBTkdFIFNUQVRFOiB0YXNrc1xuICAgICAqIFNFVCBTVE9SQUdFOiB0YXNrc1xuICAgICAqICovXG5cbiAgICBjb25zdCBvbkNvbXBsZXRlZCA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRlbnRpZnldJyk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRlbnRpZnknKSk7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gWy4uLnRhc2tzXS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIC8qIGlmIHRoZSBkaXNwbGF5ZWQgdGFza3MgYXJlIGltcG9ydGFudCwgaGlkZSB0aGVtICovXG4gICAgICAgICAgICBjb25zdCBpc0NvbXBsZXRlZEdyb3VwRGlzcGxheSA9IGZpbHRlckJ1dHRvbiA9PT0gJ2NvbXBsZXRlZCc7XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZUdyb3VwRGlzcGxheSA9IGZpbHRlckJ1dHRvbiA9PT0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBpc0NvbXBsZXRlZEdyb3VwRGlzcGxheSB8fCBpc0FjdGl2ZUdyb3VwRGlzcGxheTtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6ICF0YXNrLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUYXNrcyh0b2Rvcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIC8qIGlmIG9ubHkgY29tcGxldGVkIHRhc2tzIGFyZSBkaXNwbGF5ZWQgYXQgdGhlIG1vbWVudCAqL1xuICAgICAgICBpZiAoZmlsdGVyQnV0dG9uID09PSAnY29tcGxldGVkJykge1xuICAgICAgICAgICAgLyogaXMgdGhlcmUgYXQgbGVhc3Qgb25lIHdpdGggYSBmbGFnIGNvbXBsZXRlZDogdHJ1ZSAqL1xuICAgICAgICAgICAgY29uc3QgYXJlVGhlcmVDb21wbGV0ZWRUYXNrcyA9IHRvZG9zLnNvbWUoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgICAgICAgIC8qIGlmIG5vdCwgY2FsbCB0aGUgZnVuY3Rpb24gc2hvd0FjdGl2ZVRhc2tzIGFuZCBzaG93IGFsbCBhY3RpdmUgdGFza3MgKi9cbiAgICAgICAgICAgIGlmICghYXJlVGhlcmVDb21wbGV0ZWRUYXNrcykge1xuICAgICAgICAgICAgICAgIHNob3dBY3RpdmVUYXNrcyh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogYWN0aXZlQnV0dG9uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIGRlbGV0ZSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlICh0aGlzIG1heSBiZSB1c2VmdWwpICovXG4gICAgICAgIGhlYWRpbmc/LnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgIGNvbnRlbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkRlbGV0ZSAtIHJlbW92ZXMgYSB0YXNrIGZyb20gdGhlIGFwcGxpY2F0aW9uXG4gICAgICog0YPQtNCw0LvRj9C10YIg0LfQsNC00LDQvdC40LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBidXR0b24gb2YgdGFzayAoZGVsZXRlZClcbiAgICAgKiDQutC90L7Qv9C60LAg0LfQsNC00LDQvdC40Y8gKNGD0LTQsNC70LjRgtGMKVxuICAgICAqIENIQU5HRSBTVEFURTogdGFza3NcbiAgICAgKiBTRVQgU1RPUkFHRTogdGFza3MsIHRvYXN0c1xuICAgICAqICovXG5cbiAgICBjb25zdCBvbkRlbGV0ZWQgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbnRlbnQgfSA9IGVkaXRhYmxlQ29udGVudDtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkZW50aWZ5XScpO1xuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkZW50aWZ5JykpO1xuICAgICAgICBjb25zdCB0b2RvcyA9IFsuLi50YXNrc10uZmlsdGVyKCh7IGlkOiB0YXNrSUQgfSkgPT4gdGFza0lEICE9PSBpZCk7XG4gICAgICAgIHNldFRhc2tzKHRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgLyogaWYgb25seSBjb21wbGV0ZWQgdGFza3MgYXJlIGRpc3BsYXllZCBhdCB0aGUgbW9tZW50ICovXG4gICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAvKiBpcyB0aGVyZSBhdCBsZWFzdCBvbmUgd2l0aCBhIGZsYWcgY29tcGxldGVkOiB0cnVlICovXG4gICAgICAgICAgICBjb25zdCBhcmVUaGVyZUNvbXBsZXRlZFRhc2tzID0gdG9kb3Muc29tZSgodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgICAgICAgICAgLyogaWYgbm90LCBjYWxsIHRoZSBmdW5jdGlvbiBzaG93QWN0aXZlVGFza3MgYW5kIHNob3cgYWxsIGFjdGl2ZSB0YXNrcyAqL1xuICAgICAgICAgICAgaWYgKCFhcmVUaGVyZUNvbXBsZXRlZFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZVRhc2tzKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhY3RpdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogaWYgb25seSBpbXBvcnRhbnQgdGFza3MgYXJlIGRpc3BsYXllZCBhdCB0aGUgbW9tZW50ICovXG4gICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICAvKiBpcyB0aGVyZSBhdCBsZWFzdCBvbmUgd2l0aCBhIGZsYWcgaW1wb3J0YW50OiB0cnVlICovXG4gICAgICAgICAgICBjb25zdCBhcmVUaGVyZUltcG9ydGFudFRhc2tzID0gdG9kb3Muc29tZSgodGFzaykgPT4gdGFzay5pbXBvcnRhbnQgPT09IHRydWUpO1xuICAgICAgICAgICAgLyogaWYgbm90LCBjYWxsIHRoZSBmdW5jdGlvbiBzaG93QWN0aXZlVGFza3MgYW5kIHNob3cgYWxsIGFjdGl2ZSB0YXNrcyAqL1xuICAgICAgICAgICAgaWYgKCFhcmVUaGVyZUltcG9ydGFudFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZVRhc2tzKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhY3RpdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZGVsZXRlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgKHRoaXMgbWF5IGJlIHVzZWZ1bCkgKi9cbiAgICAgICAgaGVhZGluZz8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgY29udGVudD8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgLyogc2hvdyBtZXNzYWdlICovXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRvYXN0c107XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9CX0LDQtNCw0L3QuNC1INGD0LTQsNC70LXQvdC+JyA6ICdUYXNrIGRlbGV0ZWQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydScgPyAn0KPQtNCw0LvQtdC90LjQtSDQv9GA0L7RiNC70L4g0YPRgdC/0LXRiNC90L4nIDogJ1RoZSBkZWxldGlvbiB3YXMgc3VjY2Vzc2Z1bCcsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYmctc3VjY2VzcyB0ZXh0LWxpZ2h0JyxcbiAgICAgICAgICAgIHN0YXR1czogbGFuZ3VhZ2UgPT09ICdydScgPyAn0KPRgdC/0LXRhScgOiAnU3VjY2VzcycsXG4gICAgICAgICAgICBpZDogbWVzc2FnZXMubGVuZ3RoICsgMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRvYXN0cyhtZXNzYWdlcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkVkaXQgLSBlZGl0cyBhIHRhc2tcbiAgICAgKiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQt9Cw0LTQsNC90LjQtSDQutCw0Log0YDQtdC00LDQutGC0LjRgNGD0LXQvNC+0LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBidXR0b24gb2YgdGFzayAoZWRpdGluZylcbiAgICAgKiDQutC90L7Qv9C60LAg0LfQsNC00LDQvdC40Y8gKNGA0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMKVxuICAgICAqIENsZWFycyB0aGUgcHJldmlvdXMgdGltZW91dCBhbmQgc2V0cyBhIG5ldyB0aW1lclxuICAgICAqIENIQU5HRSBTVEFURTogY3VycmVudEVkaXRhYmxlQnV0dG9uXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uRWRpdGluZyA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFtoZWFkaW5nLCBjb250ZW50XSA9IHNldEVkaXRhYmxlKHRhcmdldCk7XG4gICAgICAgIGlmIChjdXJyZW50RWRpdGFibGVCdXR0b24gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0b2dnbGVFZGl0YWJsZUF0dHJpYnV0ZVRpbWVyKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGVBdHRyaWJ1dGVUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiBkZWxldGVDb250ZW50ZWRpdGFibGVBdHRyKGhlYWRpbmcsIGNvbnRlbnQpLFxuICAgICAgICAgICAgNDAwMCxcbiAgICAgICAgKTtcbiAgICAgICAgY29udGVudC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICBoZWFkaW5nLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgfTtcblxuICAgIC8qIEV2ZW50cyBmb3IgdGFza3MgKi9cbiAgICBjb25zdCB0YXNrQnRuRXZlbnRzID0geyBvbkltcG9ydGFudCwgb25Db21wbGV0ZWQsIG9uRGVsZXRlZCwgb25FZGl0aW5nIH07XG4gICAgY29uc3QgdGFza0NhcmRFdmVudHMgPSB7IGVkaXRhYmxlVGFza0luLCBlZGl0YWJsZVRhc2tPdXQgfTtcbiAgICBjb25zdCB0YXNrQ2FyZEFkZCA9IHsgZWRpdGFibGVUYXNrRW50cnksIGVkaXRhYmxlVGFza0V4aXQgfTtcbiAgICBjb25zdCB0YXNrRXZlbnRzID0geyAuLi50YXNrQnRuRXZlbnRzLCAuLi50YXNrQ2FyZEV2ZW50cywgLi4udGFza0NhcmRBZGQsIHNldEVkaXRhYmxlIH07XG4gICAgLyogQWRkaW5nIGV2ZW50cyB0byBzd2l0Y2ggdGFza3MgKi9cbiAgICBjb25zdCB0YXNrU3RhdHVzID0geyBzaG93QWxsVGFza3MsIHNob3dBY3RpdmVUYXNrcyB9O1xuICAgIGNvbnN0IHRhc2tTdGF0dXNBZGQgPSB7IHNob3dDb21wbGV0ZWRUYXNrcywgc2hvd0ltcG9ydGFudFRhc2tzIH07XG4gICAgY29uc3QgdGFza1RvZ2dsZSA9IHsgLi4udGFza1N0YXR1cywgLi4udGFza1N0YXR1c0FkZCB9O1xuXG4gICAgLyogRXZlbnRzIGZvciBzZW5kaW5nIGEgdGFzayAqL1xuICAgIGNvbnN0IHN1Ym1pdElucHV0RXZlbnRzID0geyBvbklucHV0VGl0bGUsIG9uSW5wdXREZXNjcmlwdGlvbiwgb25EZWFkbGluZUVuYWJsZSB9O1xuICAgIGNvbnN0IHN1Ym1pdENoZWNrYm94RXZlbnRzID0geyBvbkNoYW5nZUltcG9ydGFudCwgb25DaGFuZ2VDb21wbGV0ZWQgfTtcbiAgICBjb25zdCBzdWJtaXRFdmVudHMgPSB7IC4uLnN1Ym1pdElucHV0RXZlbnRzLCAuLi5zdWJtaXRDaGVja2JveEV2ZW50cyB9O1xuICAgIC8qIFN0YXRlIGZvciBpbnB1dHMgYW5kIGNoZWNrYm94ZXMgKi9cbiAgICBjb25zdCBzdWJtaXRJbnB1dFN0YXRlID0geyBzdWJtaXRUaXRsZSwgc3VibWl0RGVzY3JpcHRpb24sIGhhbmRsZURhdGVDaGFuZ2UsIHNlbGVjdGVkRGF0ZSB9O1xuICAgIGNvbnN0IHN1Ym1pdENoZWNrYm94U3RhdGUgPSB7IHN1Ym1pdEltcG9ydGFudCwgc3VibWl0Q29tcGxldGVkLCBzdWJtaXREZWFkbGluZSB9O1xuICAgIGNvbnN0IHN1Ym1pdFN0YXRlID0geyAuLi5zdWJtaXRJbnB1dFN0YXRlLCAuLi5zdWJtaXRDaGVja2JveFN0YXRlIH07XG4gICAgY29uc3Qgc3VibWl0ID0geyBhZGRUYXNrLCAuLi5zdWJtaXRFdmVudHMsIC4uLnN1Ym1pdFN0YXRlLCBzZW5kVmFsaWRhdGlvbiB9O1xuXG4gICAgLyogU3RhdGUgYW5kIGV2ZW50cyBmb3Igc2VhcmNoIHRhc2tzICovXG4gICAgY29uc3Qgc2VhcmNoID0geyBzZWFyY2hUYXNrcywgc2VhcmNoVGFza3NWYWx1ZSB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xhbmd1YWdlfT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIG9uQ2hhbmdlVGhlbWU9e29uQ2hhbmdlVGhlbWV9IHRoZW1lPXt0aGVtZX0gc2V0TGFuZ3VhZ2U9e3NldExhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDxUb2RvTGlzdFxuICAgICAgICAgICAgICAgICAgICB0YXNrRXZlbnRzPXt0YXNrRXZlbnRzfVxuICAgICAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlPXt0YXNrVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzPXt0YXNrc31cbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VzIHRvYXN0cz17dG9hc3RzfSBzZXRUb2FzdHM9e3NldFRvYXN0c30gLz5cbiAgICAgICAgICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBDb2xsYXBzZSB9O1xyXG4iLCJpbXBvcnQgJy4vY3NzJztcclxuaW1wb3J0ICcuL2pzJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCAnLi4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCAnLi9saWJyYXJ5JztcclxuaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNhc3MnO1xyXG5cclxuUmVhY3REb20ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RfamF2YXNjcmlwdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RfamF2YXNjcmlwdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFsxN10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyg2OTgxKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzE3XSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDg4NTgpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=