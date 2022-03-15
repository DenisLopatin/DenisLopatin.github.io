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

    if (seconds > 0) {
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const daysLeft = Math.floor(hours / 24);
      const hoursLeft = hours - daysLeft * 24;
      const minutesLeft = minutes - hours * 60;
      const secondsLeft = seconds - minutes * 60;
      return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }

    return '0d 0h 0m 0s';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbnRleHQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvaW5mb3JtYXRpb24vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbmZvcm1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL2ludGVyZmFjZXMvY2hhbmdlLXRoZW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvaW50ZXJmYWNlcy9jaGFuZ2UtbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbnRlcmZhY2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXIvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9tb2RhbC9tb2RhbC1lbnRyeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL21vZGFsL21vZGFsLXJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvaGVhZGVyL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vdG9nZ2xlL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvY29tbW9uL3RvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvY29tbW9uL21lc3Nhbmdlcy9tZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vbWVzc2FuZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vbWVzc2FuZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9mdW5jdGlvbnMvdGhlbWVzL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2Z1bmN0aW9ucy90aGVtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2J1dHRvbnMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3QvdGFza3MvZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3QvdGFza3MvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvbWF0ZXJpYWwtdWktcGlja2Vycy9tYXRlcmlhbC11aS1waWNrZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvbGlicmFyeS9tYXRlcmlhbC11aS1waWNrZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VuZC9zZW5kLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90b2RvLWxpc3Qvc2VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2NvdW50ZXIvY291bnRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2NvdW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3RvZG8tbGlzdC9maWx0ZXIvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2ZpbHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdG9kby1saXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC8uL3NyYy9qYXZhc2NyaXB0L2xpYnJhcnkvYm9vdHN0cmFwL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0Ly4vc3JjL2phdmFzY3JpcHQvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWphdmFzY3JpcHQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkxhbmd1YWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUaXRsZSIsImxhbmd1YWdlIiwidXNlQ29udGV4dCIsIkNoYW5nZVRoZW1lIiwib25DaGFuZ2VUaGVtZSIsInRoZW1lIiwiQ2hhbmdlTGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImNoYW5nZUxhbmd1YWdlIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwiTW9kYWwiLCJNb2RhbEVudHJ5IiwiTW9kYWxSZWdpc3RyYXRpb24iLCJUb2dnbGUiLCJ0ZXh0IiwiYXJpYUxhYmVsIiwiaWNvbiIsIk1lc3NhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2xhc3NlcyIsInN0YXR1cyIsInBvcFVwIiwic2V0VG9hc3RzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50IiwiY2xvc2VzdCIsInJlbW92ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJxdWFudGl0eSIsImNoaWxkRWxlbWVudENvdW50IiwiY2xlYXJJbnRlcnZhbCIsImxhc3RNZXNzYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGQiLCJzZXRUaW1lb3V0IiwiTWVzc2FnZXMiLCJ0b2FzdHMiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlcyIsIm1hcCIsInRvYXN0IiwiaWQiLCJ0aGVtZXMiLCJjb21wb25lbnQiLCJ0YXNrU3RhdGUiLCJjb21wbGV0ZWQiLCJpbXBvcnRhbnQiLCJBcnJheSIsImlzQXJyYXkiLCJIZWFkZXIiLCJCdXR0b25zIiwidGFza1RvZ2dsZSIsInRhc2tzIiwic2hvd0FsbFRhc2tzIiwic2hvd0ltcG9ydGFudFRhc2tzIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInNvbWUiLCJ0YXNrIiwic2hvd0NvbXBsZXRlZFRhc2tzIiwic2hvd0FjdGl2ZVRhc2tzIiwiU2VhcmNoIiwic2VhcmNoIiwic2VhcmNoVGFza3MiLCJzZWFyY2hUYXNrc1ZhbHVlIiwiRGVzY3JpcHRpb24iLCJjcmVhdGVkIiwiZGVhZGxpbmUiLCJJbnRlcmZhY2UiLCJ0YXNrRXZlbnRzIiwiaXNJbXBvcnRhbnQiLCJpc0NvbXBsZXRlZCIsInRleHRGb3JJbXBvcnRhbnRCdG4iLCJ0ZXh0Rm9yQ29tcGxldGVkQnRuIiwib25JbXBvcnRhbnQiLCJvbkNvbXBsZXRlZCIsIm9uRWRpdGluZyIsIm9uRGVsZXRlZCIsIlRhc2siLCJoaWRkZW4iLCJjbGFzc2VzV2l0aFRoZW1lIiwiVGFza3MiLCJzZXRFZGl0YWJsZSIsImVkaXRhYmxlVGFza0luIiwiZWRpdGFibGVUYXNrT3V0IiwiZWRpdGFibGVUYXNrRXhpdCIsImVkaXRhYmxlVGFza0VudHJ5IiwibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInJ1IiwicnVMb2NhbGUiLCJTZW5kIiwic3VibWl0Iiwic2VsZWN0ZWREYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIkRlYWRsaW5lIiwiRGF0ZUZuc1V0aWxzIiwib25JbnB1dFRpdGxlIiwic3VibWl0VGl0bGUiLCJvbklucHV0RGVzY3JpcHRpb24iLCJzdWJtaXREZXNjcmlwdGlvbiIsIm9uQ2hhbmdlSW1wb3J0YW50Iiwic3VibWl0SW1wb3J0YW50Iiwib25DaGFuZ2VDb21wbGV0ZWQiLCJzdWJtaXRDb21wbGV0ZWQiLCJvbkRlYWRsaW5lRW5hYmxlIiwic3VibWl0RGVhZGxpbmUiLCJhZGRUYXNrIiwiQ291bnRlciIsImZpbHRlciIsIkZpbHRlcnMiLCJUb2RvTGlzdCIsIkZvb3RlciIsIkFwcCIsImRlZmF1bHRUYXNrIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsImRlYWRsaW5lU2V0dGluZ0JlZm9yZVJlbmRlciIsImRlYWRsaW5lVGltZVN0YW1wIiwiY3VycmVudFRpbWVzdGFtcCIsIkRhdGUiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5c0xlZnQiLCJob3Vyc0xlZnQiLCJtaW51dGVzTGVmdCIsInNlY29uZHNMZWZ0Iiwic2V0VGFza3MiLCJPYmplY3QiLCJhc3NpZ24iLCJzZW5kQnV0dG9uIiwic2V0U2VuZEJ1dHRvbiIsImFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsInN1Ym1pdFRpdGxlRWxlbWVudCIsInNldFN1Ym1pdFRpdGxlRWxlbWVudCIsInN1Ym1pdERlc2NFbGVtZW50Iiwic2V0U3VibWl0RGVzY0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlYWRsaW5lcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudGRvd24iLCJmb3JFYWNoIiwiZGVhZExpbmUiLCJkYXlzIiwidGV4dENvbnRlbnQiLCJ0cmltIiwic3BsaXQiLCJ4IiwicGFyc2VJbnQiLCJ0aW1lcklzQWN0aXZlIiwic2V0U3VibWl0VGl0bGUiLCJzZXRTdWJtaXREZXNjcmlwdGlvbiIsInNldFN1Ym1pdEltcG9ydGFudCIsInNldFN1Ym1pdENvbXBsZXRlZCIsInNldFN1Ym1pdERlYWRsaW5lIiwiZWRpdGFibGVDb250ZW50Iiwic2V0RWRpdGFibGVDb250ZW50IiwiY3VycmVudEVkaXRhYmxlQnV0dG9uIiwic2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uIiwidG9nZ2xlRWRpdGFibGVBdHRyaWJ1dGVUaW1lciIsImZpbHRlckJ1dHRvbiIsInNldEZpbHRlckJ1dHRvbiIsInNldFNlYXJjaFRhc2tzVmFsdWUiLCJzZW5kaW5nRGF0YUlzVmFsaWQiLCJzZXRTZW5kaW5nRGF0YUlzVmFsaWQiLCJjb250ZW50QmVmb3JlRWRpdCIsInNldENvbnRlbnRCZWZvcmVFZGl0IiwidG9kb3MiLCJtYXRjaENvbnRlbnQiLCJ3b3JkIiwicmVnZXhwIiwiUmVnRXhwIiwibWF0Y2hlcyIsInZhbCIsIm1hdGNoIiwic2V0QnV0dG9uQXNBY3RpdmUiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImJ1dHRvbiIsInNhbWVGaWx0ZXJUeXBlIiwiYWxsIiwidG9kbyIsImFjdGl2ZSIsImNvbXBsZXRlIiwic2VuZFZhbGlkYXRpb24iLCJjaGVja2VkIiwidmFsaWRhdGUiLCJjb250ZW50Iiwic3RyaWN0IiwicGF0dGVybiIsImhhdmVJbmNvcnJlY3RTeW1ib2xzIiwicmVzdWx0IiwicmVwbGFjZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwiZm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZvcm1hdCIsImRlYWRsaW5lVGltZXN0YW1wIiwiZ2V0VHlwZU9mRmlsdGVyIiwiaXNBY3RpdmUiLCJhZGRlZCIsImdldFRpbWUiLCJwdXNoIiwiY2xpY2siLCJzdHJpbmdpZnkiLCJoZWFkaW5nIiwicHJldlN0YXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZGVsZXRlQ29udGVudGVkaXRhYmxlQXR0ciIsInByZXZIZWFkaW5nIiwicHJldkNvbnRlbnQiLCJpc0VkaXRpbmdUYXNrU3VjY2Vzc2Z1bGx5IiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwidGl0bGVJc1NhbWUiLCJkZXNjcmlwdGlvbklzU2FtZSIsImN1cnJlbnQiLCJOdW1iZXIiLCJlZGl0QnRuIiwiY2xlYXJUaW1lb3V0IiwiaXNFZGl0YWJsZUNvbnRlbnQiLCJoYXNBdHRyaWJ1dGUiLCJlZGl0QWxsb3ciLCJpc0hlYWRpbmciLCJpc0NvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImNvZGUiLCJzaGlmdEtleSIsInRhcmdldElzRWRpdGFibGUiLCJhcmVUaGVyZUltcG9ydGFudFRhc2tzIiwiaXNDb21wbGV0ZWRHcm91cERpc3BsYXkiLCJpc0FjdGl2ZUdyb3VwRGlzcGxheSIsImFyZVRoZXJlQ29tcGxldGVkVGFza3MiLCJ0YXNrSUQiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0YXNrQnRuRXZlbnRzIiwidGFza0NhcmRFdmVudHMiLCJ0YXNrQ2FyZEFkZCIsInRhc2tTdGF0dXMiLCJ0YXNrU3RhdHVzQWRkIiwic3VibWl0SW5wdXRFdmVudHMiLCJzdWJtaXRDaGVja2JveEV2ZW50cyIsInN1Ym1pdEV2ZW50cyIsInN1Ym1pdElucHV0U3RhdGUiLCJzdWJtaXRDaGVj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Q0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsNkNBQTZDLHVDQUF1Qzs7V0FFcEY7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDaERBO1VBQ0E7VUFDQTtVQUNBLG1EQUFtRCxrQ0FBa0MsRUFBRTtVQUN2Riw2RUFBNkUsa0NBQWtDLEVBQUU7VUFDakgiLCJmaWxlIjoibWFpbi43MDE1YWZkYjllOGFjYTUxNDEwZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VDb250ZXh0O1xyXG4iLCJpbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4vbGFuZ3VhZ2UvbGFuZ3VhZ2UnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBUaXRsZSAtIFNob3cgYSBncmVldGluZyBhbmQgdXNlciBuYW1lXG4gKiAqL1xuXG5jb25zdCBUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLWhlYWRpbmcgcGUtMlwiPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQnNC10L3QtdC00LbQtdGAINC30LDQtNCw0YcnIDogJ1Rhc2sgbWFuYWdlcid9XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktam91cm5hbHMgcHMtMSBkLW5vbmUgZC1zbS1pbmxpbmVcIj4gPC9pPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4taGVhZGluZy11c2VyIGQtYmxvY2sgcGUtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0Ywg0L3QsCDRgdCw0LnRgicgOiAnV2VsY29tZSB0byBzaXRlJ317JyAnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xyXG5cclxuZXhwb3J0IHsgVGl0bGUgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IENoYW5nZVRoZW1lIC0gQ2hhbmdlIHRoZW1lIG9uIHNpdGVcbiAqICovXG5cbmNvbnN0IENoYW5nZVRoZW1lID0gKHsgb25DaGFuZ2VUaGVtZSwgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlsgY29sLTEyIGNvbC1tZC00IF0gbWItMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGFuZ2UtdGhlbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIGxhYmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0KHQvNC10L3QsCDRgtC10LzRiycgOiAnQ2hhbmdlIHRoZW1lJ31cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhlbWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgIGlkPVwiY2hhbmdlLXRoZW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+e2xhbmd1YWdlID09PSAncnUnID8gJ9Ch0LLQtdGC0LvQsNGPINGC0LXQvNCwJyA6ICdMaWdodCB0aGVtZSd9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj57bGFuZ3VhZ2UgPT09ICdydScgPyAn0KLQtdC80L3QsNGPINGC0LXQvNCwJyA6ICdEYXJrIHRoZW1lJ308L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVvblwiPntsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQndC10L7QvdC+0LLQsNGPINGC0LXQvNCwJyA6ICdOZW9uIHRoZW1lJ308L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ29sZFwiPntsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQl9C+0LvQvtGC0LDRjyDRgtC10LzQsCcgOiAnR29sZCB0aGVtZSd9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVtZXJhbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CY0LfRg9C80YDRg9C00L3QsNGPINGC0LXQvNCwJyA6ICdFbWVyYWxkIHRoZW1lJ31cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlVGhlbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQ2hhbmdlTGFuZ3VhZ2UgLSBDaGFuZ2UgbGFuZ3VhZ2Ugb24gc2l0ZVxuICogKi9cblxuY29uc3QgQ2hhbmdlTGFuZ3VhZ2UgPSAoeyBzZXRMYW5ndWFnZSB9KSA9PiB7XG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAodmFsdWUpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgdmFsdWUpO1xuICAgICAgICBzZXRMYW5ndWFnZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJbIGNvbC0xMiBjb2wtbWQtNCBdIG1iLTJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hhbmdlLWxhbmd1YWdlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBsYWJlbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Ch0LzQtdC90LAg0Y/Qt9GL0LrQsCcgOiAnQ2hhbmdlIGxhbmd1YWdlJ31cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IGNoYW5nZUxhbmd1YWdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2xhbmd1YWdlID09PSAncnUnID8gJ3J1JyA6ICdlbid9XG4gICAgICAgICAgICAgICAgaWQ9XCJjaGFuZ2UtbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicnVcIj7QoNGD0YHRgdC60LjQuTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlTGFuZ3VhZ2U7XG4iLCJpbXBvcnQgQ2hhbmdlVGhlbWUgZnJvbSAnLi9jaGFuZ2UtdGhlbWUnO1xuaW1wb3J0IENoYW5nZUxhbmd1YWdlIGZyb20gJy4vY2hhbmdlLWxhbmd1YWdlJztcblxuZXhwb3J0IHsgQ2hhbmdlVGhlbWUsIENoYW5nZUxhbmd1YWdlIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnQgTW9kYWwgLSBNb2RhbCB3aW5kb3cgZm9yIGF1dGhlbnRpY2F0aW9uIG9yIHJlZ2lzdHJhdGlvblxyXG4gKiAqL1xyXG5cclxuY29uc3QgTW9kYWwgPSAoeyB0aGVtZSB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbCB0ZXh0LWJvZHlcIiB0YWJJbmRleD1cIi0xXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIG1vZGFsLWZ1bGxzY3JlZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ21vZGFsLWNvbnRlbnQgYmctZGFyayB0ZXh0LWxpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdtb2RhbC1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQvdCwINGB0LDQudGC0LU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLWNsb3NlIGJ0bi1jbG9zZS13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdidG4tY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQl9Cw0LrRgNGL0YLRjCDQvtC60L3QvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0Lwg0LTQvtGB0YLRg9C/0LXQvSDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINGE0YPQvdC60YbQuNC+0L3QsNC7LiDQndCw0YHRgtGA0L7QudC60LAg0L/RgNC40L7RgNC40YLQtdGC0L3QvtGB0YLQuCDQt9Cw0LTQsNGHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC30LDQtNCw0YcsINC00LXQtNC70LDQudC9INC00LvRjyDRgdC/0LjRgdC60LAg0LfQsNC00LDRhywg0LTQvtGB0YLRg9C/INGBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC70Y7QsdC+0LPQviDRg9GB0YLRgNC+0LnRgdGC0LLQsCwg0LjQvdGC0LXRgNC10YHQvdGL0LUg0YLQtdC80Ysg0LTQu9GPINC/0YDQuNC70L7QttC10L3QuNGPINC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQktGLINC80L7QttC10YLQtSDQv9GA0L7QtNC+0LvQttC40YLRjCDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0YHQsNC50YLQvtC8INCx0LXQt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4LCDQvdC+INCyINGC0LDQutC+0Lwg0YHQu9GD0YfQsNC1INCy0LDRiNC4INC00LDQvdC90YvQtSDQsdGD0LTRg9GCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgINGF0YDQsNC90LjRgtGM0YHRjyDQvdCwINC70L7QutCw0LvRjNC90L7QvCDRg9GB0YLRgNC+0LnRgdGC0LLQtS4g0K3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQslxyXG4gICAgICAgICAgICAgICAgICAgICAgICDRgdC70YPRh9Cw0LUg0LfQsNGF0L7QtNCwINC90LAg0YHQsNC50YIg0YEg0LTRgNGD0LPQvtCz0L4g0YPRgdGC0YDQvtC50YHRgtCy0LAg0L7QvdC4INCx0YPQtNGD0YJcclxuICAgICAgICAgICAgICAgICAgICAgICAg0L3QtdC00L7RgdGC0YPQv9C90Ysg0LTQu9GPINCy0LDRgVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JDQstGC0L7RgNC40LfRg9C50YLQtdGB0Ywg0L3QsCDRgdCw0LnRgtC1INC4INC/0L7Qu9GD0YfQuNGC0LUg0L/QvtC70L3Ri9C5INC00L7RgdGC0YPQvyDQulxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQv9GA0LjQu9C+0LbQtdC90LjRjiFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0K3RgtC+INC30LDQudC80LXRgiDQv9Cw0YDRgyDQvNC40L3Rg9GCLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbW9kYWw9XCJjb250aW51ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LvQttC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1vZGFsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBNb2RhbEVudHJ5IC0gTG9nIGluIHRvIHRoZSBhcHBcclxuICogKi9cclxuXHJcbmNvbnN0IE1vZGFsRW50cnkgPSAoeyB0aGVtZSB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbCB0ZXh0LWJvZHlcIiB0YWJJbmRleD1cIi0xXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIG1vZGFsLWZ1bGxzY3JlZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ21vZGFsLWNvbnRlbnQgYmctZGFyayB0ZXh0LWxpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdtb2RhbC1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQvdCwINGB0LDQudGC0LU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLWNsb3NlIGJ0bi1jbG9zZS13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdidG4tY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQl9Cw0LrRgNGL0YLRjCDQvtC60L3QvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhdXRoZW50aWNhdGlvbi1sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRoZW50aWNhdGlvbi1sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImF1dGhlbnRpY2F0aW9uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImF1dGhlbnRpY2F0aW9uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LLQsNGIINC/0LDRgNC+0LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVDaGVjazFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJleGFtcGxlQ2hlY2sxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0L/QvtC80L3QuNGC0Ywg0LzQtdC90Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWVudHJ5PVwiYXV0aGVudGljYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtcy0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbW9kYWwtZW50cnk9XCJyZWdpc3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxFbnRyeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IE1vZGFsRW50cnkgLSBSZWdpc3RyYXRpb24gaW4gdGhlIGFwcFxyXG4gKiAqL1xyXG5cclxuY29uc3QgTW9kYWxSZWdpc3RyYXRpb24gPSAoeyB0aGVtZSB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbCB0ZXh0LWJvZHlcIiB0YWJJbmRleD1cIi0xXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIG1vZGFsLWZ1bGxzY3JlZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ21vZGFsLWNvbnRlbnQgYmctZGFyayB0ZXh0LWxpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdtb2RhbC1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lID09PSAnZGFyaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdidG4tY2xvc2UgYnRuLWNsb3NlLXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2J0bi1jbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cItCX0LDQutGA0YvRgtGMINC+0LrQvdC+XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbi1uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdpc3RyYXRpb24tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpc3RyYXRpb24tc3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KTQsNC80LjQu9C40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdpc3RyYXRpb24tc3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INCy0LDRiNGDINGE0LDQvNC40LvQuNGOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbi1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdpc3RyYXRpb24tZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LLQsNGIINC/0LDRgNC+0LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpc3RyYXRpb24tcGFzc3dvcmQtcmVwZWF0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkLXJlcGVhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnaXN0cmF0aW9uLXBhc3N3b3JkLXJlcGVhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCDQv9C+0LLRgtC+0YDQvdC+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsUmVnaXN0cmF0aW9uO1xyXG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBNb2RhbEVudHJ5IGZyb20gJy4vbW9kYWwtZW50cnknO1xyXG5pbXBvcnQgTW9kYWxSZWdpc3RyYXRpb24gZnJvbSAnLi9tb2RhbC1yZWdpc3RyYXRpb24nO1xyXG5cclxuZXhwb3J0IHsgTW9kYWwsIE1vZGFsRW50cnksIE1vZGFsUmVnaXN0cmF0aW9uIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBUb2dnbGUgLSBBIGNvbW1vbiBjb21wb25lbnQuIEl0IHN3aXRjaGVzIGNvbnRlbnQgaGlkaW5nIHRvIGRpc3BsYXlcclxuICogKi9cclxuXHJcbmNvbnN0IFRvZ2dsZSA9ICh7IHRleHQsIHRhcmdldCwgYXJpYUxhYmVsLCBpY29uIH0pID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvZ2dsZS1jb250ZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9e3RhcmdldH1cclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgYmkgJHtpY29ufWB9PiA8L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBzLTJcIj57dGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XHJcbiIsImltcG9ydCBUb2dnbGUgZnJvbSAnLi90b2dnbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2xhc3Nlcywgc3RhdHVzIH0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXN9IHRvYXN0IHNob3dpbmdgfVxyXG4gICAgICAgIHJvbGU9XCJhbGVydFwiXHJcbiAgICAgICAgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCJcclxuICAgICAgICBhcmlhLWF0b21pYz1cInRydWVcIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwibWUtYXV0b1wiPnt0aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57c3RhdHVzfTwvc21hbGw+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLQl9Cw0LrRgNGL0YLRjFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtYm9keVwiPntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb24gcG9wVXAgLSBjb25maWd1cmluZyB0aGUgbGlmZXRpbWUgb2YgcG9wLXVwIG1lc3NhZ2VzXHJcbiAqINC90LDRgdGC0YDQvtC50LrQsCDQstGA0LXQvNC10L3QuCDQttC40LfQvdC4INCy0YHQv9C70YvQstCw0Y7RidC40YUg0YHQvtC+0LHRidC10L3QuNC5XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNldFRvYXN0cyAtIHN0YXRlIG9mIGN1cnJlbnQgcG9wLXVwIG1lc3NhZ2VzXHJcbiAqINGB0L7RgdGC0L7Rj9C90LjQtSDRgtC10LrRg9GJ0LjRhSDQstGB0L/Qu9GL0LLQsNGO0YnQuNGFINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gKiAqL1xyXG5cclxuY29uc3QgcG9wVXAgPSAoc2V0VG9hc3RzKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY2xvc2UnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnLnRvYXN0Jyk7XHJcbiAgICAgICAgICAgIHBhcmVudD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgICBpZiAoIXF1YW50aXR5KSB7XHJcbiAgICAgICAgICAgIHNldFRvYXN0cyhbXSk7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGxhc3RNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWhpZGRlbicpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGFzdE1lc3NhZ2U/LnJlbW92ZSgpLCAxMDAwKTtcclxuICAgIH0sIDUwMDApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBmdW5jdGlvbiBNZXNzYWdlcyAtIGNyZWF0ZSBwb3AtdXAgbWVzc2FnZXNcclxuICog0YHQvtC30LTQsNC10YIg0LLRgdC/0LvRi9Cy0LDRjtGJ0LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICogQHBhcmFtIHthcnJheX0gdG9hc3RzIC0gY3VycmVudCBwb3AtdXAgbWVzc2FnZXNcclxuICog0YLQtdC60YPRidC40LUg0LLRgdC/0LvRi9Cy0LDRjtGJ0LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc2V0VG9hc3RzIC0gY3VycmVudCBzdGF0ZSBwb3AtdXAgb2YgbWVzc2FnZXNcclxuICog0YHQvtGB0YLQvtGP0L3QuNC1INGC0LXQutGD0YnQuNGFINCy0YHQv9C70YvQstCw0Y7RidC40YUg0YHQvtC+0LHRidC10L3QuNC5XHJcbiAqICovXHJcblxyXG5jb25zdCBNZXNzYWdlcyA9ICh7IHRvYXN0cywgc2V0VG9hc3RzIH0pID0+IHtcclxuICAgIGlmICghdG9hc3RzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHBvcFVwKHNldFRvYXN0cyksIFtdKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRvYXN0cy5tYXAoKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNsYXNzZXMsIHN0YXR1cywgaWQgfSA9IHRvYXN0O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXIgcG9zaXRpb24tZml4ZWQgYm90dG9tLTAgZW5kLTAgcC0zXCI+e21lc3NhZ2VzfTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG4iLCJpbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcztcclxuIiwiaW1wb3J0IFRvZ2dsZSBmcm9tICcuL3RvZ2dsZSc7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL21lc3Nhbmdlcyc7XHJcblxyXG5leHBvcnQgeyBUb2dnbGUsIE1lc3NhZ2VzIH07XHJcbiIsIi8qKlxyXG4gKiBAZnVuY3Rpb24gdGhlbWVzIC0gY2hhbmdpbmcgdGhlbWVzIGZvciB0aGUgYXBwXHJcbiAqIEBwYXJhbSB7IHN0cmluZyB9IGNvbXBvbmVudCAtIGNvbXBvbmVudCBuYW1lXHJcbiAqIEBwYXJhbSB7IHN0cmluZyB9IHRoZW1lIC0gY3VycmVudCB0aGVtZVxyXG4gKiBAcGFyYW0geyBzdHJpbmcgfSB2YWx1ZSAtIGNsYXNzZXMgZm9yIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0geyAoQXJyYXl8bnVsbCkgfSB0YXNrU3RhdGUgLSBhcnJheSB3aXRoIHN0YXRlIG9mIHRhc2tzIChvcHRpb25hbClcclxuICogKi9cclxuXHJcbmNvbnN0IHRoZW1lcyA9IChjb21wb25lbnQsIHRoZW1lLCB2YWx1ZSwgdGFza1N0YXRlID0gbnVsbCkgPT4ge1xyXG4gICAgbGV0IGNvbXBsZXRlZDtcclxuICAgIGxldCBpbXBvcnRhbnQ7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGAke3ZhbHVlfSBgO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFza1N0YXRlKSkge1xyXG4gICAgICAgIFtjb21wbGV0ZWQsIGltcG9ydGFudF0gPSBbdGFza1N0YXRlWzBdLCB0YXNrU3RhdGVbMV1dO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudCA9PT0gJ2hlYWRlcicpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtZXJhbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZW1lcmFsZC1oZWFkZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dvbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZ29sZC1oZWFkZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25lb24nOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctbmVvbi1oZWFkZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhcmsnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZGFyayc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctc2Vjb25kYXJ5JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudCA9PT0gJ3RvZG8tbGlzdCcpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtZXJhbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZW1lcmFsZC10b2RvLWxpc3QnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dvbGQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZ29sZC10b2RvLWxpc3QnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25lb24nOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctbmVvbi10b2RvLWxpc3QnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhcmsnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnYmctZGFyay10b2RvLWxpc3QnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWxpZ2h0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudCA9PT0gJ3Rhc2tzJykge1xyXG4gICAgICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZW1lcmFsZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWl0ZW0tZW1lcmFsZC10aGVtZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ29sZCc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWl0ZW0tZ29sZC10aGVtZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbmVvbic6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWl0ZW0tbmVvbi10aGVtZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICdsaXN0LWl0ZW0tZGFyay10aGVtZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudCA9PT0gJ3Rhc2snKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlbWVyYWxkJzpcclxuICAgICAgICAgICAgICAgIGlmIChpbXBvcnRhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICd0YXNrLWltcG9ydGFudCB0YXNrLWltcG9ydGFudC1lbWVyYWxkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICcgdGFzay1jb21wbGV0ZSB0YXNrLWNvbXBsZXRlLWVtZXJhbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dvbGQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKGltcG9ydGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ3Rhc2staW1wb3J0YW50IHRhc2staW1wb3J0YW50LWdvbGQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJyB0YXNrLWNvbXBsZXRlIHRhc2stY29tcGxldGUtZ29sZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbmVvbic6XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAndGFzay1pbXBvcnRhbnQgdGFzay1pbXBvcnRhbnQtbmVvbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnIHRhc2stY29tcGxldGUgdGFzay1jb21wbGV0ZS1uZW9uJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgIGlmIChpbXBvcnRhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICd0YXNrLWltcG9ydGFudCB0YXNrLWltcG9ydGFudC1kYXJrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICcgdGFzay1jb21wbGV0ZSB0YXNrLWNvbXBsZXRlLWRhcmsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGlmIChpbXBvcnRhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzICs9ICd0YXNrLWltcG9ydGFudCB0YXNrLWltcG9ydGFudC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnIHRhc2stY29tcGxldGUgdGFzay1jb21wbGV0ZS1saWdodCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICdmb290ZXInKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlbWVyYWxkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWVtZXJhbGQtZm9vdGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb2xkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWdvbGQtZm9vdGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduZW9uJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLW5lb24tZm9vdGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLWRhcmsnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JnLXNlY29uZGFyeSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnQgPT09ICdpbmZvcm1hdGlvbicgfHwgY29tcG9uZW50ID09PSAnYWJvdXQnKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlbWVyYWxkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2xpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb2xkJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2xpc3QtZ3JvdXAtaXRlbS13YXJuaW5nJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduZW9uJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2xpc3QtZ3JvdXAtaXRlbS1pbmZvJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2xpc3QtZ3JvdXAtaXRlbS1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyArPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZXM7XHJcbiIsImltcG9ydCB0aGVtZXMgZnJvbSAnLi90aGVtZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVzO1xyXG4iLCIvKlxuICogVGhlIG1haW4gY29tcG9uZW50IG9mIHRoZSBzaXRlIGhlYWRlclxuICogKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4vaW5mb3JtYXRpb24nO1xuaW1wb3J0IHsgQ2hhbmdlVGhlbWUsIENoYW5nZUxhbmd1YWdlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEVudHJ5LCBNb2RhbFJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgVG9nZ2xlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IEhlYWRlciAtIFRoZSBtYWluIGNvbXBvbmVudCBvZiB0aGUgc2l0ZSBoZWFkZXIuXG4gKiBSZW5kZXI6IFRpdGxlLCBDaGFuZ2VUaGVtZSwgQ2hhbmdlTGFuZ3VhZ2UsIEF1dGhlbnRpY2F0aW9uLCBNb2RhbCwgTW9kYWxFbnRyeSwgTW9kYWxSZWdpc3RyYXRpb25cbiAqICovXG5cbmNvbnN0IEhlYWRlciA9ICh7IG9uQ2hhbmdlVGhlbWUsIHRoZW1lLCBzZXRMYW5ndWFnZSB9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoZW1lcygnaGVhZGVyJywgdGhlbWUsICd0b2RvLWhlYWRlciBjb250YWluZXItZmx1aWQgdGV4dC1saWdodCcpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWl4aW4taGVhZGVyIG5hdmJhci1kYXJrIGp1c3RpZnktY29udGVudC1jZW50ZXJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17bGFuZ3VhZ2UgPT09ICdydScgPyAn0JzQtdC90LXQtNC20LXRgCDQt9Cw0LTQsNGHJyA6ICdUYXNrIG1hbmFnZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiI2hlYWRlci10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsPVwi0J7RgtC60YDRi9GC0Ywg0LjQu9C4INC30LDQutGA0YvRgtGMINC90LDQstC40LPQsNGG0LjQvtC90L3QvtC1INC80LXQvdGOINCyINGI0LDQv9C60LUg0YHQsNC50YLQsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbGxhcHNlXCIgaWQ9XCJoZWFkZXItdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPENoYW5nZVRoZW1lIG9uQ2hhbmdlVGhlbWU9e29uQ2hhbmdlVGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgICAgICA8Q2hhbmdlTGFuZ3VhZ2Ugc2V0TGFuZ3VhZ2U9e3NldExhbmd1YWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TW9kYWwgdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICAgICAgPE1vZGFsRW50cnkgdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICAgICAgPE1vZGFsUmVnaXN0cmF0aW9uIHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG5jb25zdCBCdXR0b25zID0gKHsgdGFza1RvZ2dsZSwgdGFza3MsIHRleHQgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Rhc2tUb2dnbGUuc2hvd0FsbFRhc2tzfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maWx0ZXIgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBwLTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyPVwiYWxsXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRhc2tzPy5sZW5ndGh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9IHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQstGB0LUnIDogJ2FsbCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrVG9nZ2xlLnNob3dJbXBvcnRhbnRUYXNrc31cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsdGVyIGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgcC0xXCJcbiAgICAgICAgICAgICAgICBkYXRhLWZpbHRlcj1cImltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAhKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc10pLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5pbXBvcnRhbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9IHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQstCw0LbQvdGL0LUnIDogJ2ltcG9ydGFudCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrVG9nZ2xlLnNob3dDb21wbGV0ZWRUYXNrc31cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsdGVyIGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgcC0xXCJcbiAgICAgICAgICAgICAgICBkYXRhLWZpbHRlcj1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAhKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc10pLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5jb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9IHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQt9Cw0LLQtdGA0YjQtdC90L3Ri9C1JyA6ICdjb21wbGV0ZWQnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGFza1RvZ2dsZS5zaG93QWN0aXZlVGFza3N9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpbHRlciBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHAtMSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRhc2tzPy5sZW5ndGh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9IHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQsNC60YLQuNCy0L3Ri9C1JyA6ICdhY3RpdmUnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25zO1xuIiwiaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9idXR0b25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi4vYnV0dG9ucyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuLyoqXG4gKiBAY29tcG9uZW50IFNlYXJjaCAtIEZpbmRzIHRhc2tzIGJ5IGtleXdvcmRzLlxuICogQWJpbGl0eSB0byBzZWFyY2ggYWxsLCBpbXBvcnRhbnQgb3IgY29tcGxldGVkIHRhc2tzXG4gKiAqL1xuXG5jb25zdCBTZWFyY2ggPSAoeyB0YXNrcywgdGFza1RvZ2dsZSwgc2VhcmNoIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJbIGNvbC0xMiBjb2wtbGctOCBdIG1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQn9C+0LjRgdC6INC30LDQtNCw0Yc6JyA6ICdUYXNrIFNlYXJjaDonfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3NlYXJjaC5zZWFyY2hUYXNrc31cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnNlYXJjaFRhc2tzVmFsdWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ9CS0LLQtdC00LjRgtC1INGB0LvQvtCy0LAg0LTQu9GPINC/0L7QuNGB0LrQsCDRgNCw0LfQtNC10LvRj9GPINC40YUg0L/RgNC+0LHQtdC70L7QvCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ0VudGVyIHRoZSB3b3JkcyB0byBzZWFyY2ggYnkgc2VwYXJhdGluZyB0aGVtIHdpdGggYSBzcGFjZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0YXNrcz8ubGVuZ3RofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG10LTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgb3V0bGluZWQgZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25zXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUb2dnbGU9e3Rhc2tUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzPXt0YXNrc31cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17bGFuZ3VhZ2UgPT09ICdydScgPyAn0JjRgdC60LDRgtGMJyA6ICdTZWFyY2gnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgPyAn0JLRiyDQvNC+0LbQtdGC0LUg0L3QsNC50YLQuCDRgdCy0L7QuCDQt9Cw0LTQsNGH0Lgg0LjRgdC/0L7Qu9GM0LfRg9GPINGN0YLQvtGCINC/0L7QuNGB0LonXG4gICAgICAgICAgICAgICAgICAgIDogJ1lvdSBjYW4gZmluZCB5b3VyIHRhc2tzIHVzaW5nIHRoaXMgc2VhcmNoJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBEZXNjcmlwdGlvbiAtIENvbnRhaW5zIGEgY3VzdG9tIHRhc2tcbiAqICovXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgY3JlYXRlZCwgZGVhZGxpbmUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG4gICAgbGV0IGNsYXNzZXMgPSAnYmkgJztcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBjb21wbGV0ZWQ6XG4gICAgICAgICAgICBjbGFzc2VzICs9ICdiaS1jaGVjazItY2lyY2xlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGltcG9ydGFudDpcbiAgICAgICAgICAgIGNsYXNzZXMgKz0gJ2JpLWV4Y2xhbWF0aW9uLWRpYW1vbmQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjbGFzc2VzICs9ICdiaS1ib29rbWFya3MtZmlsbCc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInRvZG8tYXJ0aWNsZSB0ZXh0LWNlbnRlciB0ZXh0LW1kLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInsgbWl4aW4tbGlzdC1pdGVtLWNoaWxkIH0gYm9yZGVyLWJvdHRvbSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtb25lLWV4cHJlc3Npb24tcGVyLWxpbmUgKi99XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CX0LDQtNCw0L3QuNC1INCx0YvQu9C+INGB0L7Qt9C00LDQvdC+OicgOiAnVGhlIHRhc2sgaGFzIGJlZW4gY3JlYXRlZDonfXsnICd9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2tcIj57Y3JlYXRlZCB8fCAnYXV0byd9PC9zcGFuPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidG9kby1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzfT4gPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMVwiIGRhdGEtZWRpdD1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWNvbnRlbnRcIiBkYXRhLWVkaXQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ7IG1peGluLWxpc3QtaXRlbS1jaGlsZCB9IGJvcmRlci10b3AgbXQtMlwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXdhdGNoXCI+IDwvaT5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JrRgNCw0LnQvdC40Lkg0YHRgNC+0Lo6JyA6ICdEZWFkbGluZTonfVxuICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHBzLTFcIiBkYXRhLWRlYWRsaW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZWFkbGluZSB8fCAnMDDQtCA6IDI00YcgOiA1NNC8IDogMjJjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWFkbGluZSB8fCAnMDBkIDogMjRoIDogNTRtIDogMjJzJ31cbiAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBJbnRlcmZhY2UgLSBSZW5kZXIgb2YgdXNlciBpbnRlcmZhY2VzIGZvciB0YXNrXG4gKiAqL1xuXG5jb25zdCBJbnRlcmZhY2UgPSAoeyB0YXNrRXZlbnRzLCBpc0ltcG9ydGFudCwgaXNDb21wbGV0ZWQgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG5cbiAgICBsZXQgdGV4dEZvckltcG9ydGFudEJ0bjtcbiAgICBsZXQgdGV4dEZvckNvbXBsZXRlZEJ0bjtcbiAgICBpZiAobGFuZ3VhZ2UgPT09ICdydScpIHtcbiAgICAgICAgdGV4dEZvckltcG9ydGFudEJ0biA9IGlzSW1wb3J0YW50ID8gJ9Cf0YDQvtGB0YLQsNGPJyA6ICfQktCw0LbQvdCw0Y8nO1xuICAgICAgICB0ZXh0Rm9yQ29tcGxldGVkQnRuID0gaXNDb21wbGV0ZWQgPyAn0JLQtdGA0L3Rg9GC0YwnIDogJ9CS0YvQv9C+0LvQvdC10L3QsCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dEZvckltcG9ydGFudEJ0biA9IGlzSW1wb3J0YW50ID8gJ1NpbXBsZScgOiAnSW1wb3J0YW50JztcbiAgICAgICAgdGV4dEZvckNvbXBsZXRlZEJ0biA9IGlzQ29tcGxldGVkID8gJ0JhY2snIDogJ0NvbXBsZXRlJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8taW50ZXJmYWNlcyBkLWZsZXggZmxleC13cmFwIG1pbi13LTMyMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Rhc2tFdmVudHMub25JbXBvcnRhbnR9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbnRlcmZhY2UgYnRuLW91dGxpbmUtd2FybmluZyBidXR0b24taW5mb1wiXG4gICAgICAgICAgICAgICAgZGF0YS1pbnRlcmZhY2U9XCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWlzQ29tcGxldGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0Rm9ySW1wb3J0YW50QnRufVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGFza0V2ZW50cy5vbkNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWludGVyZmFjZSBidG4tb3V0bGluZS1zdWNjZXNzIGJ1dHRvbi1pbmZvXCJcbiAgICAgICAgICAgICAgICBkYXRhLWludGVyZmFjZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHRGb3JDb21wbGV0ZWRCdG59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0YXNrRXZlbnRzLm9uRWRpdGluZ31cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWludGVyZmFjZSBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnV0dG9uLWluZm9cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW50ZXJmYWNlPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhaXNDb21wbGV0ZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMJyA6ICdFZGl0J31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Rhc2tFdmVudHMub25EZWxldGVkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW50ZXJmYWNlIGJ0bi1vdXRsaW5lLWRhbmdlciBidXR0b24taW5mb1wiXG4gICAgICAgICAgICAgICAgZGF0YS1pbnRlcmZhY2U9XCJkZWxldGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQo9C00LDQu9C40YLRjCcgOiAnRGVsZXRlJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IFRhc2sgLSBSZW5kZXIgdGFzayBkZXNjcmlwdGlvbiBhbmQgdGFzayBpbnRlcmZhY2UuXHJcbiAqIERlZmluaW5nIHRoZSB0b3BpYywgcHJpb3JpdHksIGFuZCBleGVjdXRpb25cclxuICogKi9cclxuXHJcbmNvbnN0IFRhc2sgPSAoeyB0YXNrRXZlbnRzLCB0YXNrLCB0aGVtZSwgY2xhc3NlcyB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFudCwgY29tcGxldGVkLCBjcmVhdGVkLCBkZWFkbGluZSwgaGlkZGVuIH0gPSB0YXNrO1xyXG4gICAgY29uc3QgY2xhc3Nlc1dpdGhUaGVtZSA9IHRoZW1lcygndGFzaycsIHRoZW1lLCBjbGFzc2VzLCBbY29tcGxldGVkLCBpbXBvcnRhbnRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXNXaXRoVGhlbWV9IGRhdGEtaWRlbnRpZnk9e2lkfSBoaWRkZW49eyEhaGlkZGVufT5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ9e2ltcG9ydGFudH1cclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZD17Y3JlYXRlZH1cclxuICAgICAgICAgICAgICAgIGRlYWRsaW5lPXtkZWFkbGluZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEludGVyZmFjZSB0YXNrRXZlbnRzPXt0YXNrRXZlbnRzfSBpc0ltcG9ydGFudD17aW1wb3J0YW50fSBpc0NvbXBsZXRlZD17Y29tcGxldGVkfSAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IFRhc2tzIC0gUmVuZGVyIG9mIGFsbCBjb21wb25lbnRzIG9mIHRoZSBUYXNrLlxyXG4gKiBUaGUgbnVtYmVyIG9mIHRhc2sgY29tcG9uZW50cyBpcyB0aGUgc2l6ZSBvZiB0aGUgYXJyYXkgeyB0YXNrcyB9XHJcbiAqICovXHJcblxyXG5jb25zdCBUYXNrcyA9ICh7IHRhc2tFdmVudHMsIHRhc2tzLCB0aGVtZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdGhlbWVzKCd0YXNrcycsIHRoZW1lLCAneyBtaXhpbi1saXN0LWl0ZW0gfSBmbGV4LW1kLXJvdyBwLTEgcC1tZC0yJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJvdyBwdC0yXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlsgY29sLTEyIF1cIj5cclxuICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh7IHRhcmdldCB9KSA9PiB0YXNrRXZlbnRzLnNldEVkaXRhYmxlKHRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGFza0V2ZW50cy5lZGl0YWJsZVRhc2tJbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3Rhc2tFdmVudHMuZWRpdGFibGVUYXNrT3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGFza0V2ZW50cy5lZGl0YWJsZVRhc2tFeGl0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3Rhc2tFdmVudHMuZWRpdGFibGVUYXNrRW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0V2ZW50cz17dGFza0V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFzay5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcclxuIiwiaW1wb3J0IFRhc2tzIGZyb20gJy4vdGFza3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7XHJcbiIsImltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlciwgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCBydUxvY2FsZSBmcm9tICdkYXRlLWZucy9sb2NhbGUvcnUnO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VuLVVTJztcclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICAgIGVuOiBlbkxvY2FsZSxcclxuICAgIHJ1OiBydUxvY2FsZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IERhdGVGbnNVdGlscywgRGF0ZVRpbWVQaWNrZXIsIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCBsb2NhbGVNYXAgfTtcclxuIiwiaW1wb3J0IHtcclxuICAgIERhdGVGbnNVdGlscyxcclxuICAgIERhdGVUaW1lUGlja2VyLFxyXG4gICAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgICBsb2NhbGVNYXAsXHJcbn0gZnJvbSAnLi9tYXRlcmlhbC11aS1waWNrZXJzJztcclxuXHJcbmV4cG9ydCB7IERhdGVGbnNVdGlscywgRGF0ZVRpbWVQaWNrZXIsIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCBsb2NhbGVNYXAgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcbmltcG9ydCB7XG4gICAgRGF0ZUZuc1V0aWxzLFxuICAgIERhdGVUaW1lUGlja2VyLFxuICAgIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxuICAgIGxvY2FsZU1hcCxcbn0gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS9tYXRlcmlhbC11aS1waWNrZXJzJztcblxuLyoqXG4gKiBAY29tcG9uZW50IFNlbmQgLSBTZW5kIGEgdGFzayB0byB0aGUgZGF0YWJhc2VcbiAqICovXG5cbmNvbnN0IFNlbmQgPSAoeyBzdWJtaXQgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWREYXRlLCBoYW5kbGVEYXRlQ2hhbmdlIH0gPSBzdWJtaXQ7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcblxuICAgIC8qKlxuICAgICAqIEBjb21wb25lbnQgRGVhZGxpbmUgLSBkZWFkbGluZSBmb3IgY29tcGxldGlvbiBpZiB0aGUgZGVhZGxpbmUgZm9yIHRoZSBmbGFnIHdhcyBzZXQgYXMgJ3RydWUnXG4gICAgICogKi9cblxuICAgIGNvbnN0IERlYWRsaW5lID0gKCkgPT4gKFxuICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30gbG9jYWxlPXtsb2NhbGVNYXBbbGFuZ3VhZ2VdfT5cbiAgICAgICAgICAgIDxEYXRlVGltZVBpY2tlciB2YWx1ZT17c2VsZWN0ZWREYXRlfSBvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZX0gLz5cbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IGNvbGxhcHNlXCIgaWQ9XCJhZGQtdGFza1wiPlxuICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG8tdGl0bGVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRg9GOINC30LDQtNCw0YfRgzonIDogJ0FkZCBhIG5ldyB0YXNrOid9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17c3VibWl0Lm9uSW5wdXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJtaXQuc3VibWl0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9kby10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2RvLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9CS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0L3QvtCy0L7QuSDQt9Cw0LTQsNGH0Lg6J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciB0aGUgbmFtZSBvZiB0aGUgbmV3IHRhc2s6J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Cd0LDQt9Cy0LDQvdC40LUg0LfQsNC00LDRh9C4INC00L7Qu9C20L3QviDQsdGL0YLRjCDQtNC70LjQvdC90LXQtSDRgdC10LzQuCDRgdC40LzQstC+0LvQvtCyINC4INC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINGB0LjQvNCy0L7Qu9GLXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn0YDRg9GB0YHQutC+0LPQviDQuNC70Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDQsNC70YTQsNCy0LjRgtCwLCDRhtC40YTRgNGLINC4INGB0LvQtdC00YPRjtGJ0LjQtSDQt9C90LDQutC4OiAhID8gJCAlICYgKiAoIClcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrID0gLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdUaGUgdGFzayBuYW1lIG11c3QgYmUgbG9uZ2VyIHRoYW4gc2V2ZW4gY2hhcmFjdGVycyBhbmQgbWF5IGNvbnRhaW4gdGhlIGNoYXJhY3RlcnMgXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUnVzc2lhbiBvciBFbmdsaXNoIGFscGhhYmV0LCBudW1iZXJzIGFuZCB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6ICEgPyAkICUgJiAqICggKVxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysgPSAtJ31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0LfQsNC00LDRh9GDOicgOiAnRGVzY3JpYmUgeW91ciB0YXNrOid9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3N1Ym1pdC5vbklucHV0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VibWl0LnN1Ym1pdERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvZG8tZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0LWZpeC10Z2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9CS0LLQtdC00LjRgtC1INGC0LXQutGB0YIg0L3QvtCy0L7QuSDQt9Cw0LTQsNGH0LgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ0VudGVyIHRoZSB0ZXh0IG9mIHRoZSBuZXcgdGFzaydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9kby1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAn0J7Qv9C40YHQsNC90LjQtSDQt9Cw0LTQsNGH0Lgg0LTQvtC70LbQvdC+INCx0YvRgtGMINC00LvQuNC90L3QtdC1INGB0LXQvNC4INGB0LjQvNCy0L7Qu9C+0LIg0Lgg0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0YHQuNC80LLQvtC70YtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfRgNGD0YHRgdC60L7Qs9C+INC40LvQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INCw0LvRhNCw0LLQuNGC0LAsINGG0LjRhNGA0Ysg0Lgg0YHQu9C10LTRg9GO0YnQuNC1INC30L3QsNC60Lg6ICEgPyAkICUgJiAqICggKVxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysgPSAtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1RoZSB0YXNrIGRlc2NyaXB0aW9uIG11c3QgYmUgbG9uZ2VyIHRoYW4gc2V2ZW4gY2hhcmFjdGVycyBhbmQgbWF5IGNvbnRhaW4gdGhlIGNoYXJhY3RlcnMgXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUnVzc2lhbiBvciBFbmdsaXNoIGFscGhhYmV0LCBudW1iZXJzIGFuZCB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6ICEgPyAkICUgJiAqICggKVxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysgPSAtJ31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3VibWl0Lm9uQ2hhbmdlSW1wb3J0YW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N1Ym1pdC5zdWJtaXRJbXBvcnRhbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImltcG9ydGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQntGC0LzQtdGC0LjRgtGMINC60LDQuiDQstCw0LbQvdGD0Y4nIDogJ01hcmsgYXMgaW1wb3J0YW50J31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJtaXQub25DaGFuZ2VDb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3VibWl0LnN1Ym1pdENvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiY29tcGxldGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Ce0YLQvNC10YLQuNGC0Ywg0LrQsNC6INC30LDQstC10YDRiNC10L3QvdGD0Y4nIDogJ01hcmsgYXMgY29tcGxldGVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJtaXQub25EZWFkbGluZUVuYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdWJtaXQuc3VibWl0RGVhZGxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImRlYWRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9Cj0YHRgtCw0L3QvtCy0LjRgtGMINC60YDQsNC50L3QuNC5INGB0YDQvtC6JyA6ICdTZXQgYSBkZWFkbGluZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3N1Ym1pdC5zdWJtaXREZWFkbGluZSA/IDxEZWFkbGluZSAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXQuYWRkVGFza31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdy0xMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CU0L7QsdCw0LLQuNGC0YwnIDogJ0FkZCd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VuZDtcbiIsImltcG9ydCBTZW5kIGZyb20gJy4vc2VuZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW5kO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgQ291bnRlciAtIFNob3cgaW5mb3JtYXRpb24gYWJvdXQgdGFza3MuXG4gKiBOdW1iZXIgb2YgY3VycmVudCBhbmQgY29tcGxldGVkIHRhc2tzLlxuICogKi9cblxuY29uc3QgQ291bnRlciA9ICh7IHRhc2tzIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJbIGNvbC0xMiBjb2wtbGctNCBdIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAncnUnID8gJ9CX0LDQtNCw0L3QuNC5INC+0YHRgtCw0LvQvtGB0Ywg0LLRi9C/0L7Qu9C90LjRgtGMOicgOiAnVGFza3MgbGVmdCB0byBjb21wbGV0ZTonfVxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtdG9kbz1cInN0aWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtgICR7dGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpLmxlbmd0aH1gfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JfQsNC00LDQvdC40Lkg0LLRi9C/0L7Qu9C90LXQvdC+OicgOiAnVGFza3MgY29tcGxldGVkOid9XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS10b2RvPVwiY29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2AgJHt0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkKS5sZW5ndGh9YH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XG4iLCJpbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuLi9idXR0b25zJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgRmlsdGVycyAtIFRhc2sgZmlsdGVyLlxuICogQWJpbGl0eSB0byBzaG93IGFsbCwgaW1wb3J0YW50IG9yIGNvbXBsZXRlZCB0YXNrc1xuICogKi9cblxuY29uc3QgRmlsdGVycyA9ICh7IHRhc2tzLCB0YXNrVG9nZ2xlIH0pID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KSB8fCAncnUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1lbmQgbWItMlwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlsgY29sLTEyIGNvbC14bC02IGNvbC1tZC04IF0gYnRuLWdyb3VwIG10LTJcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZG8gbGlzdCBidXR0b25zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICB0YXNrVG9nZ2xlPXt0YXNrVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICB0YXNrcz17dGFza3N9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhbmd1YWdlID09PSAncnUnID8gJ9Cf0L7QutCw0LfQsNGC0YwnIDogJ1Nob3cnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xuIiwiaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi9maWx0ZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7XHJcbiIsIi8qXG4gKiBDb21wb25lbnQgdG9kby1saXN0XG4gKiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFRhc2tzIGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IFNlbmQgZnJvbSAnLi9zZW5kJztcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY291bnRlcic7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBUb2dnbGUgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgVG9kb0xpc3QgLSBNYWluIGNvbXBvbmVudCBmb3IgdG9kb3NcbiAqIFJlbmRlcjogU2VhcmNoLCBUYXNrcywgU2VuZCwgQ291bnRlciwgRmlsdGVycyBhbmQgMiBUb2dnbGVcbiAqICovXG5cbmNvbnN0IFRvZG9MaXN0ID0gKHsgdGFza0V2ZW50cywgdGFza1RvZ2dsZSwgc3VibWl0LCB0YXNrcywgdGhlbWUsIHNlYXJjaCB9KSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCkgfHwgJ3J1JztcbiAgICBjb25zdCBjbGFzc2VzID0gdGhlbWVzKCd0b2RvLWxpc3QnLCB0aGVtZSwgJ3RvZG8tbGlzdCBmbGV4LWdyb3ctMSB0cmFuc2l0aW9uLWJnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiWyBjb250YWluZXIteGwgY29sLTEyIF1cIj5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhbmd1YWdlID09PSAncnUnID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0L/QvtC40YHQuicgOiAnU2hvdyBzZWFyY2gnfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCIjc2VhcmNoLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0LzQtdC90Y4g0LTQu9GPINC/0L7QuNGB0LrQsCDQt9Cw0LTQsNC90LjQuSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdTaG93IHRoZSB0YXNrIHNlYXJjaCBtZW51J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiaS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWVuZCBjb2xsYXBzZVwiIGlkPVwic2VhcmNoLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIHRhc2tzPXt0YXNrc30gdGFza1RvZ2dsZT17dGFza1RvZ2dsZX0gc2VhcmNoPXtzZWFyY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGVyIHRhc2tzPXt0YXNrc30gLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFRhc2tzIHRhc2tFdmVudHM9e3Rhc2tFdmVudHN9IHRhc2tzPXt0YXNrc30gdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJzIHRhc2tUb2dnbGU9e3Rhc2tUb2dnbGV9IHRhc2tzPXt0YXNrc30gLz5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhbmd1YWdlID09PSAncnUnID8gJ9Ch0L7Qt9C00LDRgtGMINC30LDQtNCw0L3QuNC1JyA6ICdDcmVhdGUgdGFzayd9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIiNhZGQtdGFza1wiXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0LzQtdC90Y4g0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LfQsNC00LDQvdC40LknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnU2hvdyB0YXNrIGNyZWF0ZSBtZW51J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiaS1wZW5jaWwtZmlsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VuZCBzdWJtaXQ9e3N1Ym1pdH0gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG8tbGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBGb290ZXIgLSBSZW5kZXIgdGhlIGZvb3RlciBvZiB0aGUgc2l0ZVxuICogUmVuZGVyOiBUb2dnbGUsIEluZm9ybWF0aW9uLCBBYm91dFxuICogKi9cblxuY29uc3QgRm9vdGVyID0gKHsgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIHx8ICdydSc7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoZW1lcyhcbiAgICAgICAgJ2Zvb3RlcicsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICAneyBtaXhpbi1mb290ZXIgfSB0b2RvLWZvb3RlciBjb250YWluZXItZmx1aWQgbmF2YmFyLWRhcmsnLFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbmQgdGV4dC11cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JzQtdC90LXQtNC20LXRgCDQt9Cw0LTQsNGHJyA6ICdUYXNrIE1hbmFnZXInfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8qXG4gKiBNYWluIGFwcCBjb21wb25lbnRcbiAqINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC80L/QvtC90LXQvdGCINC/0YDQuNC70L7QttC10L3QuNGPXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG8tbGlzdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbi8qKlxuICogQGNvbXBvbmVudCBBcHAgLSBtYWluIGFwcCBjb21wb25lbnQuXG4gKiDQvtGB0L3QvtCy0L3QvtC5INC60L7QvNC/0L7QvdC10L3RgiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICogKi9cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIC8qXG4gICAgICogSWYgdGhlIGFwcGxpY2F0aW9uIHdhcyBkb3dubG9hZGVkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAqIG9yIHRoZSBsb2NhbCBzdGF0ZSBoYXMgYmVlbiBkZWxldGVkIGFuZCB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgICogdGhlIGRlZmF1bHQgdGFzayBpcyB1c2VkXG4gICAgICog0JXRgdC70Lgg0L/RgNC40LvQvtC20LXQvdC40LUg0LHRi9C70L4g0LfQsNCz0YDRg9C20LXQvdC+INGBINGD0YHRgtGA0L7QudGB0YLQstCwINCy0L/QtdGA0LLRi9C1XG4gICAgICog0LjQu9C4INC70L7QutCw0LvRjNC90L7QtSDRhdGA0LDQvdC40LvQuNGJ0LUg0L3QtSDQsdGL0LvQviDQvtCx0L3QsNGA0YPQttC10L3QviDQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgKiDQutC+INCy0YHQtdC80YMg0L3QtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0L3QsCDRgdCw0LnRgtC1LCDRgtC+INC00LDQvdC90L7QtSDQt9Cw0LTQsNC90LjQtSDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0L3QvlxuICAgICAqINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXG4gICAgICovXG5cbiAgICBjb25zdCBkZWZhdWx0VGFzayA9IFtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAn0K3RgtC+INC30LDQtNCw0L3QuNC1INGB0L7Qt9C00LDQvdC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC00LvRjyDQv9GA0LjQvNC10YDQsCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAn0JLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC10LPQviDQuCDQvdCw0YfQsNGC0Ywg0YHQvtC30LTQsNCy0LDRgtGMINC00YDRg9Cz0LjQtSDQt9Cw0LTQsNC90LjRjy4g0JfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCDQvdCwINGB0LDQudGC0LUg0YfRgtC+LdCx0Ysg0L/QvtC70YPRh9C40YLRjCDQsdC+0LvRjNGI0LUg0LLQvtC30LzQvtC20L3QvtGB0YLQtdC5LiDQo9C00LDRh9C4IScsXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6ICfQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCcsXG4gICAgICAgICAgICBkZWFkbGluZTogJzFkIDFoIDFtIDFzJyxcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuICAgIF07XG5cbiAgICAvKiBzdGF0ZXMgYW5kIHVzZSBlZmZlY3RzICovXG5cbiAgICAvKlxuICAgICAqIHRoZW1lIHN0YXRlXG4gICAgICog0YHQvtGB0YLQvtGP0L3QuNC1INGC0LXQvNGLXG4gICAgICogKi9cbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpIHx8ICdsaWdodCcpO1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGRlYWRsaW5lU2V0dGluZ0JlZm9yZVJlbmRlciAtIGNyZWF0ZXMgYSBkYXRlIGZvcm1hdCBiZWZvcmUgdGFzayByZW5kZXJcbiAgICAgKiDRgdC+0LfQtNCw0LXRgiDQutC+0YDRgNC10LrRgtC90YvQuSDRhNC+0YDQvNCw0YIg0LTQsNGC0Ysg0LTQviDQvtGC0YDQuNGB0L7QstC60Lgg0LfQsNC00LDQvdC40LlcbiAgICAgKiBAcGFyYW0ge2RlYWRsaW5lVGltZVN0YW1wfSBkYXRlIC0gZGVhZGxpbmUgdGltZXN0YW1wIChjdXJyZW50IGRhdGUgb2YgZGVhZGxpbmUpXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIGZvcm1hdHRlZCBkYXRhXG4gICAgICog0LLQvtC30LLRgNCw0YnQsNC10YIg0L7RgtGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC90YPRjiDQtNCw0YLRg1xuICAgICAqICovXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICBjb25zdCBkZWFkbGluZVNldHRpbmdCZWZvcmVSZW5kZXIgPSAoeyBkZWFkbGluZVRpbWVTdGFtcCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRlYWRsaW5lVGltZVN0YW1wIC0gY3VycmVudFRpbWVzdGFtcCkgLyAxMDAwKTtcblxuICAgICAgICBpZiAoc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcblxuICAgICAgICAgICAgY29uc3QgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGhvdXJzIC8gMjQpO1xuICAgICAgICAgICAgY29uc3QgaG91cnNMZWZ0ID0gaG91cnMgLSBkYXlzTGVmdCAqIDI0O1xuICAgICAgICAgICAgY29uc3QgbWludXRlc0xlZnQgPSBtaW51dGVzIC0gaG91cnMgKiA2MDtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0ID0gc2Vjb25kcyAtIG1pbnV0ZXMgKiA2MDtcblxuICAgICAgICAgICAgcmV0dXJuIGAke2RheXNMZWZ0fWQgJHtob3Vyc0xlZnR9aCAke21pbnV0ZXNMZWZ0fW0gJHtzZWNvbmRzTGVmdH1zYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnMGQgMGggMG0gMHMnO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIHRhc2sgc3RhdGUgKGdldCB0YXNrcyBhbmQgc2hvdyBvbmx5IGFjdGl2ZSBvbmVzIGF0IHRoZSBmaXJzdCBkb3dubG9hZClcbiAgICAgKiDQv9GA0Lgg0LrQsNC20LTQvtC5INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyDQsdGD0LTQtdGCINCy0LfRj9GCINC+0LHRitC10LrRgiDQuNC3INC70L7QutCw0LvRjNC90L7Qs9C+INGF0YDQsNC90LjQu9C40YnQsFxuICAgICAqINC40LvQuCDQt9Cw0LTQsNC90LjQtSDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQsiDRgdC70YPRh9Cw0LUg0LXQs9C+INC+0YLRgdGD0YLRgdGC0LLQuNGPLiDQlNCw0LvQtdC1INCx0YPQtNGD0YIg0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNC90Ysg0LLRgdC1XG4gICAgICog0L3QtSDQstGL0L/QvtC70L3QtdC90L3Ri9C1INC30LDQtNCw0L3QuNGPINC4INGD0YHRgtCw0L3QvtCy0LvQtdC90Ysg0LrQsNC6INC90LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRjyB0YXNrc1xuICAgICAqINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90L4g0L/QtdGA0LXQutC70Y7Rh9C40LIg0YTQu9Cw0LMg0YTQu9Cw0LMg0LIg0L/QvtC70L7QttC10L3QuNC1IGZhbHNlXG4gICAgICogICovXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShcbiAgICAgICAgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IGRlZmF1bHRUYXNrKS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmRlYWRsaW5lVGltZVN0YW1wKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGRlYWRsaW5lOiBkZWFkbGluZVNldHRpbmdCZWZvcmVSZW5kZXIodGFzaykgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXNrICYmICF0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW46IHRydWUgfSk7XG4gICAgICAgIH0pLFxuICAgICk7XG5cbiAgICAvKlxuICAgICAqIHNldCBkZWFkbGluZS4gY29tcG9uZW50ICdzZW5kJywgbGlicmFyeSAtIG1hdGVyaWFsLXVpLXBpY2tlcnNcbiAgICAgKiDQvdCw0YHRgtGA0L7QudC60LAg0LrRgNCw0LnQvdC10LPQviDRgdGA0L7QutCwINCy0YvQv9C+0LvQvdC10L3QuNGPINC30LDQtNCw0YfQuC4g0LHQuNCx0LvQuNC+0YLQtdC60LAgLSBtYXRlcmlhbC11aS1waWNrZXJzXG4gICAgICogKi9cbiAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBoYW5kbGVEYXRlQ2hhbmdlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgLypcbiAgICAgKiBvdGhlciBub2RlIGVsZW1lbnRzIHN0YXRlXG4gICAgICog0YHQvtGB0YLQvtGP0L3QuNC1INC00LvRjyDQutC90L7Qv9C+0Log0LTQvtCx0LDQstC70LXQvdC40Y8g0LfQsNC00LDRh9C4LCDQsNC60YLQuNCy0L3QvtC5INC30LDQtNCw0YfQuCwg0LfQsNCz0L7Qu9C+0LLQutCwINC4INC+0L/QuNGB0LDQvdC40Y9cbiAgICAgKiAqL1xuICAgIGNvbnN0IFtzZW5kQnV0dG9uLCBzZXRTZW5kQnV0dG9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFthY3RpdmVCdXR0b24sIHNldEFjdGl2ZUJ1dHRvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VibWl0VGl0bGVFbGVtZW50LCBzZXRTdWJtaXRUaXRsZUVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1Ym1pdERlc2NFbGVtZW50LCBzZXRTdWJtaXREZXNjRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qXG4gICAgICogc2V0dGluZyBzdGF0ZSBhZnRlciBtb3VudGluZ1xuICAgICAqINC90LDRgdGC0YDQvtC50LrQsCDRgdC+0YHRgtC+0Y/QvdC40Lkg0L/QvtGB0LvQtSDQvNC+0L3RgtC40YDQvtCy0LDQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LBcbiAgICAgKiAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFNlbmRCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtdGFyZ2V0PVwiI2FkZC10YXNrXCJdJykpO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsdGVyPVwiYWN0aXZlXCJdJykpO1xuICAgICAgICBzZXRTdWJtaXRUaXRsZUVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKSk7XG4gICAgICAgIHNldFN1Ym1pdERlc2NFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJykpO1xuICAgIH0sIFtdKTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBkZWFkbGluZSAtIHNldCBkZWFkbGluZSBmb3IgdGFza1xuICAgICAqINC+0YLQvtCx0YDQsNC20LDQtdGCINC+0YHRgtCw0LLRiNC10LXRgdGPINCy0YDQtdC80Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LfQsNC00LDRh9C4XG4gICAgICogKi9cblxuICAgIGNvbnN0IGRlYWRsaW5lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWFkbGluZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVhZGxpbmVdJyldO1xuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBkZWFkbGluZXMuZm9yRWFjaCgoZGVhZExpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzXSA9IGRlYWRMaW5lLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lcklzQWN0aXZlID0gZGF5cyB8fCBob3VycyB8fCBtaW51dGVzIHx8IHNlY29uZHM7XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZXJJc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDwgMCAmJiBtaW51dGVzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSA1OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobWludXRlcyA8IDAgJiYgaG91cnMgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IDU5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaG91cnMgPCAwICYmIGRheXMgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVhZExpbmUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tICR7c2Vjb25kc31zYCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY291bnRkb3duLCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGVmZmVjdCBmb3IgZGVhZGxpbmVcbiAgICAgKiDRjdGE0YTQtdC60YIg0LTQu9GPINC90LDRgdGC0YDQvtC50LrQuCDQutGA0LDQudC90LXQs9C+INGB0YDQvtC60LAg0LfQsNC00LDRh9C4XG4gICAgICogKi9cbiAgICB1c2VFZmZlY3QoZGVhZGxpbmUsIFt0YXNrc10pO1xuXG4gICAgLypcbiAgICAgKiBwb3AtdXAgbWVzc2FnZXNcbiAgICAgKiDQstGB0L/Qu9GL0LLQsNGO0YnQuNC1INGB0L7QvtCx0YnQtdC90LjRj1xuICAgICAqL1xuICAgIGNvbnN0IFt0b2FzdHMsIHNldFRvYXN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvKlxuICAgICAqIGxhbmd1YWdlIHN0YXRlXG4gICAgICog0YHQvtGB0YLQvtGP0L3QuNC1INC70L7QutCw0LvQuNC30LDRhtC40LhcbiAgICAgKiAgKi9cbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIHx8ICdydScpO1xuXG4gICAgLypcbiAgICAgKiBzZXR0aW5nIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50ICh0b2RvLWxpc3Qvc2VuZClcbiAgICAgKiDQvdCw0YHRgtGA0L7QudC60LAg0YHQvtGB0YLQvtGP0L3QuNGPINC00LvRjyDQutC+0L3RgtGA0L7Qu9C40YDRg9C10LzRi9GFINC60L7QvNC/0L7QvdC10L3RgtC+0LIg0YTQvtGA0LzRiyAodG9kby1saXN0L3NlbmQpXG4gICAgICovXG4gICAgY29uc3QgW3N1Ym1pdFRpdGxlLCBzZXRTdWJtaXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N1Ym1pdERlc2NyaXB0aW9uLCBzZXRTdWJtaXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N1Ym1pdEltcG9ydGFudCwgc2V0U3VibWl0SW1wb3J0YW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VibWl0Q29tcGxldGVkLCBzZXRTdWJtaXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzdWJtaXREZWFkbGluZSwgc2V0U3VibWl0RGVhZGxpbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLypcbiAgICAgKiBzZXR0aW5nIHRoZSBzdGF0ZXMgb2YgdGhlIGN1cnJlbnQgZWRpdGFibGUgY29udGVudHMgKHRvZG8tbGlzdC90YXNrcylcbiAgICAgKiDRgdC+0YHRgtC+0Y/QvdC40LUg0YLQtdC60YPRidC10LPQviDRgNC10LTQsNC60YLQuNGA0YPQtdC80L7Qs9C+INC60L7QvdGC0LXQvdGC0LAgKHRvZG8tbGlzdC90YXNrcylcbiAgICAgKi9cbiAgICBjb25zdCBbZWRpdGFibGVDb250ZW50LCBzZXRFZGl0YWJsZUNvbnRlbnRdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgLypcbiAgICAgKiBzZXR0aW5nIHRoZSBzdGF0ZXMgb2YgdGhlIGN1cnJlbnQgZWRpdGFibGUgYnV0dG9uXG4gICAgICog0YLQtdC60YPRidCw0Y8g0LrQvdC+0L/QutCwICfRgNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCdcbiAgICAgKi9cbiAgICBjb25zdCBbY3VycmVudEVkaXRhYmxlQnV0dG9uLCBzZXRDdXJyZW50RWRpdGFibGVCdXR0b25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAqIHRpbWVyIHJlbW92YWwgZWRpdGFibGUgYXR0cmlidXRlXG4gICAgICog0YLQsNC50LzQtdGAINGD0LTQsNC70LXQvdC40Y8g0LDRgtGA0LjQsdGD0YLQsCBlZGl0YWJsZVxuICAgICAqL1xuICAgIGxldCBbdG9nZ2xlRWRpdGFibGVBdHRyaWJ1dGVUaW1lcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qXG4gICAgICogdGhlIGZpbHRlciBidXR0b24gd2lsbCBiZSBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgZmlsdGVyXG4gICAgICogYWxsLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCwgY3VycmVudCAtIGFjdGl2ZVxuICAgICAqIGFsbCwgYWN0aXZlLCBpbXBvcnRhbnQsIGNvbXBsZXRlZFxuICAgICAqINGB0L7RgdGC0L7Rj9C90LjQtSDQtNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINGC0LXQutGD0YnQtdC5INC60L3QvtC/0LrQuCDRhNC40LvRjNGC0YDQsCDQt9Cw0LTQsNGHXG4gICAgICog0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINGC0L7Qs9C+INGH0YLQvi3QsdGLINC/0L7QvdGP0YLRjCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgdC60YDRi9Cy0LDRgtGMINC/0YDQuCDQv9C10YDQtdC60LvRjtGH0LXQvdC40LhcbiAgICAgKiBhbGwsIGltcG9ydGFudCwgY29tcGxldGVkLCBjdXJyZW50IC0gYWN0aXZlXG4gICAgICovXG4gICAgY29uc3QgW2ZpbHRlckJ1dHRvbiwgc2V0RmlsdGVyQnV0dG9uXSA9IHVzZVN0YXRlKCdhY3RpdmUnKTtcblxuICAgIC8qXG4gICAgICogc3RhdGUgZm9yIHRhc2sgc2VhcmNoXG4gICAgICog0L/QvtC40YHQuiDQt9Cw0LTQsNGH0LhcbiAgICAgKi9cbiAgICBjb25zdCBbc2VhcmNoVGFza3NWYWx1ZSwgc2V0U2VhcmNoVGFza3NWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvKlxuICAgICAqIHZhbGlkYXRlIGJlZm9yZSBzZW5kaW5nXG4gICAgICog0LrQu9C40LXQvdGC0YHQutCw0Y8g0LLQsNC70LjQtNCw0YbQuNGPINC/0LXRgNC10LQg0L7RgtC/0YDQsNCy0LrQvtC5INC00LDQvdC90YvRhVxuICAgICAqL1xuICAgIGNvbnN0IFtzZW5kaW5nRGF0YUlzVmFsaWQsIHNldFNlbmRpbmdEYXRhSXNWYWxpZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qXG4gICAgICogc3RhdGUgdGFzayBjb250ZW50IGJlZm9yZSBlZGl0aW5nXG4gICAgICog0YHQvtGB0YLQvtGP0L3QuNC1INC60L7QvdGC0LXQvdGC0LAg0LfQsNC00LDRh9C4INC/0LXRgNC10LQg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtdC8XG4gICAgICog0L/QvtC30LLQvtC70Y/QtdGCINC/0L7QvdGP0YLRjCDQvdGD0LbQvdC+INC70Lgg0YHQvtGF0YDQsNC90Y/RgtGMINC00LDQvdC90YvQtVxuICAgICAqL1xuICAgIGNvbnN0IFtjb250ZW50QmVmb3JlRWRpdCwgc2V0Q29udGVudEJlZm9yZUVkaXRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc2VhcmNoVGFza3MgLSBzZWFyY2ggZm9yIHRhc2tzIHZpYSB0aGUgc2VhcmNoIGZvcm1cbiAgICAgKiDQv9C+0LjRgdC6INC30LDQtNCw0L3QuNC5XG4gICAgICogQHBhcmFtIHsoSFRNTElucHV0RWxlbWVudHxPYmplY3QpfSB0YXJnZXQgLSBpbnB1dCBlbGVtZW50XG4gICAgICog0Y3Qu9C10LzQtdC90YIgaW5wdXRcbiAgICAgKiBTVEFURTogc2V0VGFza3MsIHNldFNlYXJjaFRhc2tzVmFsdWVcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgc2VhcmNoVGFza3MgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gWy4uLnRhc2tzXS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoQ29udGVudCA9IFsuLi50YXNrLnRpdGxlLnNwbGl0KCcgJyksIC4uLnRhc2suZGVzY3JpcHRpb24uc3BsaXQoJyAnKV0uZmlsdGVyKFxuICAgICAgICAgICAgICAgICh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYF4ke3dvcmR9JGAsICdnaScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIoKHZhbCkgPT4gdmFsLm1hdGNoKHJlZ2V4cCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHJldHVybiBtYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChtYXRjaENvbnRlbnQubGVuZ3RoIHx8ICF2YWx1ZS50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlckJ1dHRvbiA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdhY3RpdmUnICYmICF0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlckJ1dHRvbiA9PT0gJ2ltcG9ydGFudCcgJiYgdGFzay5pbXBvcnRhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdjb21wbGV0ZWQnICYmIHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IGhpZGRlbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2VhcmNoVGFza3NWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHNldFRhc2tzKHRvZG9zKTtcbiAgICB9O1xuXG4gICAgLyogZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggdGFzayBmaWx0ZXJzXG4gICAgICogaXQgaW5jbHVkZXMgYnV0dG9ucyBmb3Igc2VhcmNoIGFuZCBmaWx0ZXJpbmcgbW9kdWxlc1xuICAgICAqINCz0YDRg9C/0L/QsCDRhNGD0L3QutGG0LjQuSDQv9C+INGA0LDQsdC+0YLQtSDRgSDRhNC40LvRjNGC0YDQsNC80Lgg0LfQsNC00LDQvdC40LlcbiAgICAgKiDQstC60LvRjtGH0LDQtdGCINC60L3QvtC/0LrQuCDQvNC+0LTRg9C70Y8g0L/QvtC40YHQutCwINC4INGE0LjQu9GM0YLRgNCw0YbQuNC4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc2V0QnV0dG9uQXNBY3RpdmUgLSBzZXRzIHRoZSBhY3RpdmUgYnV0dG9uIGZvciB0aGUgZmlsdGVyIG9yIHNlYXJjaFxuICAgICAqINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC60L3QvtC/0LrRgyDQsNC60YLQuNCy0L3QvtC5INC00LvRjyDQvNC+0LTRg9C70LXQuSDQv9C+0LjRgdC60LAg0Lgg0YTQuNC70YzRgtGA0LDRhtC40Lgg0LfQsNC00LDQvdC40LlcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBjdXJyZW50IGJ1dHRvblxuICAgICAqINGC0LXQutGD0YnQsNGPINC60L3QvtC/0LrQsFxuICAgICAqICovXG5cbiAgICBjb25zdCBzZXRCdXR0b25Bc0FjdGl2ZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWZpbHRlcicpLFxuICAgICAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1zZWFyY2gnKSxcbiAgICAgICAgXTtcbiAgICAgICAgYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2FtZUZpbHRlclR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSB0eXBlO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiA9PT0gdGFyZ2V0IHx8IHNhbWVGaWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBzaG93QWxsVGFza3MgLSBzaG93cyBhbGwgdGFza3Mgb24gdGhlIHBhZ2VcbiAgICAgKiDQv9C+0LrQsNC30YvQstCw0LXRgiDQstGB0LUg0LfQsNC00LDQvdC40Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gLSBjdXJyZW50IGJ1dHRvbiAoYWxsKVxuICAgICAqINGC0LXQutGD0YnQsNGPINC60L3QvtC/0LrQsCAo0LLRgdC1KVxuICAgICAqIFNUQVRFOiBzZXRUYXNrcywgc2V0RmlsdGVyQnV0dG9uLCBzZXRTZWFyY2hUYXNrc1ZhbHVlXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNob3dBbGxUYXNrcyA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgWy4uLnRhc2tzXTtcbiAgICAgICAgY29uc3QgYWxsID0gdG9kb3MubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKHRvZG8sIHsgaGlkZGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIHNldEJ1dHRvbkFzQWN0aXZlKHRhcmdldCk7XG4gICAgICAgIHNldFRhc2tzKGFsbCk7XG4gICAgICAgIHNldEZpbHRlckJ1dHRvbignYWxsJyk7XG4gICAgICAgIHNldFNlYXJjaFRhc2tzVmFsdWUoJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc2hvd0FjdGl2ZVRhc2tzIC0gc2hvd3MgYWN0aXZlIHRhc2tzIG9uIHRoZSBwYWdlXG4gICAgICog0L/QvtC60LDQt9GL0LLQsNC10YIg0LDQutGC0LjQstC90YvQtSDQt9Cw0LTQsNC90LjRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAtIGN1cnJlbnQgYnV0dG9uIChhY3RpdmVzKVxuICAgICAqINGC0LXQutGD0YnQsNGPINC60L3QvtC/0LrQsCAo0LDQutGC0LjQstC90YvQtSlcbiAgICAgKiBTVEFURTogc2V0VGFza3MsIHNldEZpbHRlckJ1dHRvbiwgc2V0U2VhcmNoVGFza3NWYWx1ZVxuICAgICAqICovXG5cbiAgICBjb25zdCBzaG93QWN0aXZlVGFza3MgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFsuLi50YXNrc107XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRvZG9zLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRCdXR0b25Bc0FjdGl2ZSh0YXJnZXQpO1xuICAgICAgICBzZXRUYXNrcyhhY3RpdmUpO1xuICAgICAgICBzZXRGaWx0ZXJCdXR0b24oJ2FjdGl2ZScpO1xuICAgICAgICBzZXRTZWFyY2hUYXNrc1ZhbHVlKCcnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNob3dJbXBvcnRhbnRUYXNrcyAtIHNob3dzIGltcG9ydGFudCB0YXNrcyBvbiB0aGUgcGFnZVxuICAgICAqINC/0L7QutCw0LfRi9Cy0LDQtdGCINCy0YHQtSDQstCw0LbQvdGL0LUg0LfQsNC00LDQvdC40Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gLSBjdXJyZW50IGJ1dHRvbiAoaW1wb3J0YW50KVxuICAgICAqINGC0LXQutGD0YnQsNGPINC60L3QvtC/0LrQsFxuICAgICAqIFNUQVRFOiBzZXRUYXNrcywgc2V0RmlsdGVyQnV0dG9uLCBzZXRTZWFyY2hUYXNrc1ZhbHVlXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNob3dJbXBvcnRhbnRUYXNrcyA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgWy4uLnRhc2tzXTtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50ID0gdG9kb3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhc2suaW1wb3J0YW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHsgaGlkZGVuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUYXNrcyhpbXBvcnRhbnQpO1xuICAgICAgICBzZXRCdXR0b25Bc0FjdGl2ZSh0YXJnZXQpO1xuICAgICAgICBzZXRGaWx0ZXJCdXR0b24oJ2ltcG9ydGFudCcpO1xuICAgICAgICBzZXRTZWFyY2hUYXNrc1ZhbHVlKCcnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNob3dDb21wbGV0ZWRUYXNrcyAtIHNob3dzIGNvbXBsZXRlZCB0YXNrcyBvbiB0aGUgcGFnZVxuICAgICAqINC/0L7QutCw0LfRi9Cy0LDQtdGCINCy0YHQtSDQt9Cw0LLQtdGA0YjQtdC90L3Ri9C1INC30LDQtNCw0L3QuNGPINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IC0gY3VycmVudCBidXR0b24gKGNvbXBsZXRlZClcbiAgICAgKiDRgtC10LrRg9GJ0LDRjyDQutC90L7Qv9C60LAgKNCy0YvQv9C+0LvQvdC10L3QvdGL0LUpXG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZXRUYXNrcywgc2V0RmlsdGVyQnV0dG9uLCBzZXRTZWFyY2hUYXNrc1ZhbHVlXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNob3dDb21wbGV0ZWRUYXNrcyA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgWy4uLnRhc2tzXTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSB0b2Rvcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW4gfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFzaywgeyBoaWRkZW4gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEJ1dHRvbkFzQWN0aXZlKHRhcmdldCk7XG4gICAgICAgIHNldFRhc2tzKGNvbXBsZXRlKTtcbiAgICAgICAgc2V0RmlsdGVyQnV0dG9uKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgc2V0U2VhcmNoVGFza3NWYWx1ZSgnJyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogZnVuY3Rpb25zIGZvciBjb250cm9sbGVkIGNvbXBvbmVudHMgKHRvZG8tbGlzdC9zZW5kKVxuICAgICAqINGE0YPQvdC60YbQuNC4INC/0L4g0YDQsNCx0L7RgtC1INGBINC60L7QvdGC0YDQvtC70LjRgNGD0LXQvNGL0LzQuCDQutC+0LzQv9C+0L3QtdC90YLQsNC80Lgg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0LfQsNC00LDQvdC40Y9cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbklucHV0VGl0bGUgLSBjb25maWd1cmluZyB0aGUgdGFzayBoZWFkZXIgYmVmb3JlIHNlbmRpbmdcbiAgICAgKiDQstCw0LvQuNC00LDRhtC40Y8g0Lgg0YHQvtGF0YDQsNC90LXQvdC40LUg0LfQsNCz0L7Qu9C+0LLQutCwINCx0YPQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0L/QtdGA0LXQtCDQvtGC0L/RgNCw0LLQutC+0LlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB1c2VyLWVudGVyZWQgdmFsdWVcbiAgICAgKiDQstCy0L7QtNC40LzQvtC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHN1Ym1pdFRpdGxlXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uSW5wdXRUaXRsZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICAgICAgc2V0U3VibWl0VGl0bGUodmFsdWUpO1xuICAgICAgICBzZW5kVmFsaWRhdGlvbigndGl0bGUnKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25JbnB1dERlc2NyaXB0aW9uIC0gY29uZmlndXJpbmcgdGhlIHRhc2sgY29udGVudCBiZWZvcmUgc2VuZGluZ1xuICAgICAqINCy0LDQu9C40LTQsNGG0LjRjyDQuCDRgdC+0YXRgNCw0L3QtdC90LjQtSDQvtC/0LjRgdCw0L3QuNGPINCx0YPQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0L/QtdGA0LXQtCDQvtGC0L/RgNCw0LLQutC+0LlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB1c2VyLWVudGVyZWQgdmFsdWVcbiAgICAgKiDQstCy0L7QtNC40LzQvtC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHN1Ym1pdERlc2NyaXB0aW9uXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uSW5wdXREZXNjcmlwdGlvbiA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICAgICAgc2V0U3VibWl0RGVzY3JpcHRpb24odmFsdWUpO1xuICAgICAgICBzZW5kVmFsaWRhdGlvbignZGVzY3JpcHRpb24nKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25DaGFuZ2VJbXBvcnRhbnQgLSBzZXR0aW5nIHRoZSBpbXBvcnRhbmNlIG9mIHRoZSB0YXNrXG4gICAgICog0YHQvtGF0YDQsNC90LXQvdC40LUg0YTQu9Cw0LPQsCDQviDQstCw0LbQvdC+0YHRgtC4INC30LDQtNCw0YfQuFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZCAtIHVzZXItc2VsZWN0ZWQgZmxhZ1xuICAgICAqINGC0LXQutGD0YnQuNC5INGE0LvQsNCzINGD0YHRgtCw0L3QvtCy0LvQtdC90L3Ri9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzdWJtaXRJbXBvcnRhbnRcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgb25DaGFuZ2VJbXBvcnRhbnQgPSAoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgaWYgKHN1Ym1pdENvbXBsZXRlZCkge1xuICAgICAgICAgICAgc2V0U3VibWl0Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdWJtaXRJbXBvcnRhbnQoY2hlY2tlZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkNoYW5nZUltcG9ydGFudCAtIHNldHMgd2hldGhlciB0aGUgdGFzayBpcyBjb21wbGV0ZWRcbiAgICAgKiDRgdC+0YXRgNCw0L3QtdC90LjQtSDRhNC70LDQs9CwINC+INCy0YvQv9C+0LvQvdC10L3QuNC4INC30LDQtNCw0YfQuFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZCAtIHVzZXItc2VsZWN0ZWQgZmxhZ1xuICAgICAqINGC0LXQutGD0YnQuNC5INGE0LvQsNCzINGD0YHRgtCw0L3QvtCy0LvQtdC90L3Ri9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzdWJtaXRDb21wbGV0ZWRcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgb25DaGFuZ2VDb21wbGV0ZWQgPSAoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICAgICAgaWYgKHN1Ym1pdEltcG9ydGFudCkge1xuICAgICAgICAgICAgc2V0U3VibWl0SW1wb3J0YW50KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdWJtaXRDb21wbGV0ZWQoY2hlY2tlZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkRlYWRsaW5lRW5hYmxlIC0gc2V0cyB0YXNrIGRlYWRsaW5lXG4gICAgICog0YHQvtGF0YDQsNC90LXQvdC40LUg0YTQu9Cw0LPQsCwg0LrQvtGC0L7RgNGL0Lkg0YDQtdGI0LDQtdGCINC/0L7QutCw0LfRi9Cy0LDRgtGMINC70Lgg0LrRgNCw0LnQvdC40Lkg0YHRgNC+0Log0LfQsNC00LDQvdC40Y9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgLSB1c2VyLXNlbGVjdGVkIGZsYWdcbiAgICAgKiDRg9GB0YLQsNC90L7QstC70LXQvdC90L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZXRTdWJtaXREZWFkbGluZVxuICAgICAqICovXG5cbiAgICBjb25zdCBvbkRlYWRsaW5lRW5hYmxlID0gKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdERlYWRsaW5lKGNoZWNrZWQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGNoYW5nZSB0aGVtZVxuICAgICAqINC40LfQvNC10L3QtdC90LjQtSDRgtC10LzRi1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uQ2hhbmdlVGhlbWUgLSBDaGFuZ2UgdGhlbWUgZm9yIGFwcFxuICAgICAqINC40LfQvNC10L3QtdC90LjQtSDRgtC10LzRiyDQsiDQv9GA0LjQu9C+0LbQtdC90LjQuFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlIG9mIG9wdGlvbiBlbGVtZW50XG4gICAgICog0LLRi9Cx0YDQsNC90L3QvtC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHZhbHVlLCB0aGVtZVxuICAgICAqIENIQU5HRSBTVE9SQUdFOiB0aGVtZVxuICAgICAqL1xuXG4gICAgY29uc3Qgb25DaGFuZ2VUaGVtZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgc2V0VGhlbWUodmFsdWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogdmFsaWRhdGVcbiAgICAgKiDQstCw0LvQuNC00LDRhtC40Y9cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiB2YWxpZGF0ZSAtIHZhbGlkYXRpb24gb2YgdGhlIGhlYWRlciBhbmQgY29udGVudCB2YWx1ZXMgZm9yIHRoZSB0YXNrXG4gICAgICog0LLQsNC70LjQtNCw0YbQuNGPINCy0LLQtdC00LXQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8INC30L3QsNGH0LXQvdC40Y9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBpbnB1dCB2YWx1ZVxuICAgICAqINC30L3QsNGH0LXQvdC40LUg0LLQstC10LTQtdC90L3QvtC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBoZWFkaW5nIG9yIGNvbnRlbnRcbiAgICAgKiDQt9Cw0LPQvtC70L7QstC+0Log0LjQu9C4INC+0L/QuNGB0LDQvdC40LVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0cmljdCAtIHN0cmljdCBtb2RlIGZvciB2YWxpZGF0aW9uXG4gICAgICog0YHRgtGA0L7Qs9C40Lkg0YDQtdC20LjQvCDQtNC70Y8g0LLQsNC70LjQtNCw0YbQuNC4XG4gICAgICogQHJldHVybiB7KHN0cmluZ3xib29sZWFuKX0gLSBlZGl0ZWQgc3RyaW5nIG9yIGZhbHNlXG4gICAgICogKi9cblxuICAgIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlLCBjb250ZW50LCBzdHJpY3QgPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gL1teIDAtOWEtetCwLdGP0ZEhPyQlJiooKSs9L3wuLC1dL2dpO1xuICAgICAgICBjb25zdCBoYXZlSW5jb3JyZWN0U3ltYm9scyA9IHZhbHVlLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS50cmltKCkucmVwbGFjZShwYXR0ZXJuLCAnJyk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgaGF2ZUluY29ycmVjdFN5bWJvbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPj0gNyA/IHJlc3VsdCA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50ID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+PSAxMCA/IHJlc3VsdCA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIHNlbmRWYWxpZGF0aW9uIC0gaXQgZG9lcyB2YWxpZGF0aW9uIGJlZm9yZSBzZW5kaW5nXG4gICAgICog0LTQtdC70LDQtdGCINCy0LDQu9C40LTQsNGG0LjRjiDQv9C10YDQtdC0INC+0YLQv9GA0LDQstC60L7QuVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gd2hpY2ggY29udGVudCB3aWxsIGJlIGNoZWNrZWRcbiAgICAgKiDQv9GA0L7QstC10YDRj9C10LzRi9C5INC60L7QvdGC0LXQvdGCXG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZXRTZW5kaW5nRGF0YUlzVmFsaWRcbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgc2VuZFZhbGlkYXRpb24gPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHZhbGlkYXRlKHN1Ym1pdFRpdGxlRWxlbWVudC52YWx1ZSwgJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsaWRhdGUoc3VibWl0RGVzY0VsZW1lbnQudmFsdWUsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGl0bGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTZW5kaW5nRGF0YUlzVmFsaWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50ID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0RGVzY0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdERlc2NFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ym1pdERlc2NFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzdWJtaXREZXNjRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2VuZGluZ0RhdGFJc1ZhbGlkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgJiYgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHNldFNlbmRpbmdEYXRhSXNWYWxpZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGRhdGUgZm9ybWF0XG4gICAgICog0YTQvtGA0LzQsNGCINC00LDRgtGLXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZGF0ZUZvcm1hdCAtIGNyZWF0ZXMgYSBkYXRlIGZvcm1hdFxuICAgICAqINGB0L7Qt9C00LDQtdGCINC60L7RgNGA0LXQutGC0L3Ri9C5INGE0L7RgNC80LDRgiDQtNCw0YLRi1xuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIHNvbWUgZGF0ZSAoY3VycmVudCBkYXRlIG9mIGRlYWRsaW5lKVxuICAgICAqINC90LXQutC+0YLQvtGA0LDRjyDQtNCw0YLQsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZGVmaW5lcyB0aGUgdHlwZSBvZiBmb3JtYXR0aW5nXG4gICAgICog0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjQtSDQtNC70Y8g0YHRgtCw0YDRgtCwINC40LvQuCDQutGA0LDQudC90LXQs9C+INGB0YDQvtC60LBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gZm9ybWF0dGVkIGRhdGFcbiAgICAgKiDQstC+0LfQstGA0LDRidCw0LXRgiDQvtGC0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90L3Rg9GOINC00LDRgtGDXG4gICAgICogKi9cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAoZGF0ZSwgdHlwZSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobGFuZ3VhZ2UsIHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0dGVyLmZvcm1hdChkYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RlYWRsaW5lJyAmJiAhc3VibWl0Q29tcGxldGVkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWFkbGluZVRpbWVzdGFtcCA9ICtkYXRlO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRlYWRsaW5lVGltZXN0YW1wIC0gY3VycmVudFRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcblxuICAgICAgICAgICAgY29uc3QgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGhvdXJzIC8gMjQpO1xuICAgICAgICAgICAgY29uc3QgaG91cnNMZWZ0ID0gaG91cnMgLSBkYXlzTGVmdCAqIDI0O1xuICAgICAgICAgICAgY29uc3QgbWludXRlc0xlZnQgPSBtaW51dGVzIC0gaG91cnMgKiA2MDtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0ID0gc2Vjb25kcyAtIG1pbnV0ZXMgKiA2MDtcbiAgICAgICAgICAgIGlmIChkYXlzTGVmdCA8IDAgfHwgaG91cnNMZWZ0IDwgMCB8fCBtaW51dGVzTGVmdCA8IDAgfHwgc2Vjb25kc0xlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwZCAwaCAwbSAwcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5c0xlZnR90LQgJHtob3Vyc0xlZnR90YcgJHttaW51dGVzTGVmdH3QvCAke3NlY29uZHNMZWZ0fdGBYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzBkIDBoIDBtIDBzJztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBhZGQgdGFza1xuICAgICAqINC00L7QsdCw0LLQu9C10L3QuNC1INC30LDQtNCw0L3QuNGPXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZ2V0VHlwZU9mRmlsdGVyIC0gZ2V0IHR5cGUgb2YgZmlsdGVyXG4gICAgICog0L7Qv9GA0LXQtNC10LvRj9C10YIg0YHRgtC+0LjRgiDQu9C4INC30LDQtNCw0YfQtSDQv9C+0Y/QstC40YLRjNGB0Y8g0LjQu9C4INC90LXRgiDQv9GA0Lgg0LXQtSDQtNC+0LHQsNCy0LvQtdC90LjQuFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gdHJ1ZSAoaWYgbmVlZCBoaWRlIHRhc2spIG9yIGZhbHNlXG4gICAgICovXG5cbiAgICBjb25zdCBnZXRUeXBlT2ZGaWx0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBmaWx0ZXJCdXR0b24gPT09ICdhY3RpdmUnICYmIHN1Ym1pdENvbXBsZXRlZDtcbiAgICAgICAgY29uc3QgaXNDb21wbGV0ZWQgPSBmaWx0ZXJCdXR0b24gPT09ICdjb21wbGV0ZWQnICYmICFzdWJtaXRDb21wbGV0ZWQ7XG4gICAgICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gZmlsdGVyQnV0dG9uID09PSAnaW1wb3J0YW50JyAmJiAhc3VibWl0SW1wb3J0YW50O1xuICAgICAgICBpZiAoaXNBY3RpdmUgfHwgaXNDb21wbGV0ZWQgfHwgaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpZGRlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGFkZFRhc2sgLSBBZGRpbmcgdGFzayBmb3IgYXBwXG4gICAgICog0LTQvtCx0LDQstC70LXQvdC40LUg0LfQsNC00LDRh9C4INCyINC/0YDQuNC70L7QttC10L3QuNC1XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZW5kQnV0dG9uLCBzZXRTdWJtaXRUaXRsZSwgc2V0U3VibWl0RGVzY3JpcHRpb25cbiAgICAgKiBzZXRTdWJtaXRDb21wbGV0ZWQsIHNldFN1Ym1pdEltcG9ydGFudCwgc2V0U3VibWl0RGVhZGxpbmUsIHNldFRhc2tzXG4gICAgICogc2V0Q3JlYXRlZFRhc2tUaW1lLCBzZXREZWFkbGluZVRhc2tcbiAgICAgKiBDSEFOR0UgU1RPUkFHRTogdGFza3NcbiAgICAgKi9cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gdGFza3MubGVuZ3RoID8gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaWQgKyAxIDogMTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB2YWxpZGF0ZShzdWJtaXRUaXRsZSwgJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsaWRhdGUoc3VibWl0RGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBjcmVhdGVkID0gZGF0ZUZvcm1hdChuZXcgRGF0ZSgpLCAnc3RhcnQnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgICBjb25zdCBkZWFkbGluZSA9IGRhdGVGb3JtYXQoc2VsZWN0ZWREYXRlLCAnZGVhZGxpbmUnKTtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50ID0gc3VibWl0SW1wb3J0YW50O1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBzdWJtaXRDb21wbGV0ZWQ7XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGdldFR5cGVPZkZpbHRlcigpO1xuICAgICAgICBjb25zdCBhZGRlZCA9IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltcG9ydGFudCxcbiAgICAgICAgICAgIGNvbXBsZXRlZCxcbiAgICAgICAgICAgIGNyZWF0ZWQsXG4gICAgICAgICAgICBkZWFkbGluZSxcbiAgICAgICAgICAgIGhpZGRlbixcbiAgICAgICAgICAgIGRlYWRsaW5lVGltZVN0YW1wOiBzZWxlY3RlZERhdGUuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoc2VuZGluZ0RhdGFJc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IFsuLi50YXNrc107XG4gICAgICAgICAgICB0b2Rvcy5wdXNoKGFkZGVkKTtcbiAgICAgICAgICAgIHNlbmRCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIHNldFN1Ym1pdFRpdGxlKCcnKTtcbiAgICAgICAgICAgIHNldFN1Ym1pdERlc2NyaXB0aW9uKCcnKTtcbiAgICAgICAgICAgIHNldFN1Ym1pdENvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgICAgICBzZXRTdWJtaXRJbXBvcnRhbnQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U3VibWl0RGVhZGxpbmUoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGFza3ModG9kb3MpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgICAgIHN1Ym1pdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBzdWJtaXRUaXRsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmFsaWQnKTtcbiAgICAgICAgICAgIHN1Ym1pdERlc2NFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIHN1Ym1pdERlc2NFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZhbGlkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi50b2FzdHNdO1xuICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9CU0LDQvdC90YvQtSDQvdC1INCx0YPQtNGD0YIg0L7RgtC/0YDQsNCy0LvQtdC90YsnIDogJ05vIGRhdGEgd2lsbCBiZSBzZW50JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYNCf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0LTQsNC90L3Ri9GFLiBcbiAgICAgICAgICAgICAgICAgICAg0JLQtdGA0L7Rj9GC0L3QviDQstGLINCy0LLQtdC70Lgg0L3QtSDQutC+0YDRgNC10LrRgtC90YvQtSDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9C10LlgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzZW5kaW5nIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIFlvdSBwcm9iYWJseSBlbnRlcmVkIGluY29ycmVjdCBmaWVsZCB2YWx1ZXNgLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdiZy1kYW5nZXIgdGV4dC1saWdodCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQntGI0LjQsdC60LAnIDogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICBpZDogbWVzc2FnZXMubGVuZ3RoICsgMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VG9hc3RzKG1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBhIGdyb3VwIG9mIGZ1bmN0aW9ucyB0aGF0IGRlZmluZSBlZGl0YWJsZSBjb250ZW50XG4gICAgICog0LPRgNGD0L/Qv9CwINGE0YPQvdC60YbQuNC5INC/0L4g0YDQsNCx0L7RgtC1INGBINGA0LXQtNCw0LrRgtC40YDRg9C10LzRi9C8INGB0L7QtNC10YDQttC40LzRi9C8INC30LDQtNCw0L3QuNGPXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gc2V0RWRpdGFibGUgLSBzZXR0aW5nIHVwIGVkaXRhYmxlIGNvbnRlbnQgaW4gdGhlIHN0YXRlXG4gICAgICog0L3QsNGB0YLRgNCw0LjQstCw0LXRgiDQuCDRgdC+0YXRgNCw0L3Rj9C10YIg0YDQtdC00LDQutGC0LjRgNGD0LXQvNGL0Lkg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQutC+0L3RgtC10L3RglxuICAgICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGFueSl9IHRhcmdldCAtICBleHBlY3RlZCAnc3Bhbicgb3IgJ3AnIGVsZW1lbnQgKGhlYWRpbmcgb3IgY29udGVudClcbiAgICAgKiDQvtC20LjQtNCw0LXRgtGB0Y8g0YPQstC40LTQtdGC0Ywg0LfQsNCz0L7Qu9C+0LLQvtC6INC30LDQtNCw0YfQuCDQuCDQtdC1INC/0LDRgNCw0LPRgNCw0YRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSB3aXRoIHR3byBIVE1MRWxlbWVudHMgLSBoZWFkaW5nIGFuZCBjb250ZW50IG9mIHRhc2tcbiAgICAgKiDQvNCw0YHRgdC40LIg0YEg0LfQsNCz0L7Qu9C+0LLQutC+0Lwg0Lgg0L/QsNGA0LDQs9GA0LDRhNC+0Lwg0LfQsNC00LDRh9C4INCyINCy0LjQtNC1IEhUTUxFbGVtZW50c1xuICAgICAqIENIQU5HRSBTVEFURTogc2V0RWRpdGFibGVDb250ZW50XG4gICAgICog0KTRg9C90LrRhtC40Y8g0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQutCw0Log0L/RgNC4INGJ0LXQu9GH0LrQtSDQv9C+INC60L3QvtC/0LrQtSBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCJcbiAgICAgKiDRgtCw0Log0Lgg0L/RgNC4INC00LLQvtC50L3QvtC8INGJ0LXQu9GH0LrQtSDQvdCwINC+0LHQu9Cw0YHRgtC4INC30LDQtNCw0L3QuNGPXG4gICAgICogKi9cblxuICAgIGNvbnN0IHNldEVkaXRhYmxlID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRlbnRpZnldJyk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdD1cImhlYWRpbmdcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdD1cImNvbnRlbnRcIl0nKTtcbiAgICAgICAgICAgIHNldEVkaXRhYmxlQ29udGVudCgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5oZWFkaW5nICE9PSBoZWFkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZS5oZWFkaW5nPy5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGUuY29udGVudD8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUsIHsgaGVhZGluZywgY29udGVudCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW2hlYWRpbmcsIGNvbnRlbnRdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnRlZGl0YWJsZUF0dHIgLSBkZWxldGluZyBlZGl0YWJsZSBjb250ZW50XG4gICAgICogZnJvbSB0aGUgaGVhZGVyIG9yIGNvbnRlbnQgaWYgdGhlIHRpbWVyXG4gICAgICogKHRoZSB0aW1lciBmb3Igc3dpdGNoaW5nIHRoZSBlZGl0YWJsZSBhdHRyaWJ1dGUpIGlzIG5vdCBkZWxldGVkXG4gICAgICog0YPQtNCw0LvRj9C10YIg0LDRgtGA0LjQsdGD0YIgJ2NvbnRlbnRlZGl0YWJsZScg0YMg0Y3Qu9C10LzQtdC90YLQvtCyINC30LDQtNCw0YfQuFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZIZWFkaW5nIC0gcHJldmlvdXMgaXRlbSBmcm9tIHRoZSBzdGF0ZVxuICAgICAqINC/0YDQtdC00YvQtNGD0YnQuNC5INC30LDQs9C+0LvQvtCy0L7QuiDQt9Cw0LTQsNGH0Lgg0LrQvtGC0L7RgNGL0Lkg0LHRi9C7INCyINGA0LXQttC40LzQtSDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldkNvbnRlbnQgLSBwcmV2aW91cyBpdGVtIGZyb20gdGhlIHN0YXRlXG4gICAgICog0L/RgNC10LTRi9C00YPRidC40Lkg0L/QsNGA0LDQs9GA0LDRhCDQt9Cw0LTQsNGH0Lgg0LrQvtGC0L7RgNGL0Lkg0LHRi9C7INCyINGA0LXQttC40LzQtSDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXG4gICAgICogKi9cblxuICAgIGNvbnN0IGRlbGV0ZUNvbnRlbnRlZGl0YWJsZUF0dHIgPSAocHJldkhlYWRpbmcsIHByZXZDb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBpZiAoaGVhZGluZyA9PT0gcHJldkhlYWRpbmcgfHwgY29udGVudCA9PT0gcHJldkNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByZXZIZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICBwcmV2Q29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBpc0VkaXRpbmdUYXNrU3VjY2Vzc2Z1bGx5IC0gY2hlY2tzIHRoZSBjb3JyZWN0bmVzcyBvZiB0aGUgaW5wdXQgZGF0YVxuICAgICAqINC/0YDQvtCy0LXRgNC60LAg0LrQvtGA0YDQtdC60YLQvdC+0YHRgtC4INCy0LLQtdC00LXQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQt9C90LDRh9C10L3QuNC5INCyINGA0LXQttC40LzQtSDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC30LDQtNCw0YfQuFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhlYWRpbmcgLSBUYXNrIHRpdGxlXG4gICAgICog0LfQsNCz0L7Qu9C+0LLQvtC6INC30LDQtNCw0YfQuFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBUYXNrIGRlc2NyaXB0aW9uXG4gICAgICog0L7Qv9C40YHQsNC90LjQtSDQt9Cw0LTQsNGH0LhcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBhcnJheSB3aXRoIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgICAqINC80LDRgdGB0LjQsiDRgSDRgtC10LrRgdGC0L7QstGL0Lwg0YHQvtC00LXRgNC20LjQvNGL0Lwg0LfQsNCz0L7Qu9C+0LLQutCwINC4INC+0L/QuNGB0LDQvdC40Y8g0LfQsNC00LDRh9C4XG4gICAgICogQ0hBTkdFIFNUQVRFOiBzZXRUb2FzdHNcbiAgICAgKiAqL1xuXG4gICAgY29uc3QgaXNFZGl0aW5nVGFza1N1Y2Nlc3NmdWxseSA9IChoZWFkaW5nLCBjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IHZhbGlkYXRlKGhlYWRpbmcudGV4dENvbnRlbnQsICd0aXRsZScsIHRydWUpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSB2YWxpZGF0ZShjb250ZW50LnRleHRDb250ZW50LCAnZGVzY3JpcHRpb24nLCB0cnVlKTtcbiAgICAgICAgaWYgKCF0aXRsZVRleHQgfHwgIWRlc2NyaXB0aW9uVGV4dCkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4udG9hc3RzXTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQlNCw0L3QvdGL0LUg0L3QtSDQsdGD0LTRg9GCINGB0L7RhdGA0LDQvdC10L3RiycgOiAnVGhlIGRhdGEgd2lsbCBub3QgYmUgc2F2ZWQnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAn0KLQtdC60YHRgiDQt9Cw0LTQsNC90LjRjyDRgdC70LjRiNC60L7QvCDQvNCw0Lsg0LjQu9C4INGB0L7QtNC10YDQttC40YIg0L3QtSDQutC+0YDRgNC10LrRgtC90YvQtSDRgdC40LzQstC+0LvRiydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ1RoZSB0YXNrIHRleHQgaXMgdG9vIHNtYWxsIG9yIGNvbnRhaW5zIGluY29ycmVjdCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnYmctZGFuZ2VyIHRleHQtbGlnaHQnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogbGFuZ3VhZ2UgPT09ICdydScgPyAn0J7RiNC40LHQutCwJyA6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2VzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRvYXN0cyhtZXNzYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gW2ZhbHNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZW50QmVmb3JlRWRpdCkge1xuICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGNvbnRlbnRCZWZvcmVFZGl0O1xuICAgICAgICAgICAgY29uc3QgdGl0bGVJc1NhbWUgPSB0aXRsZSA9PT0gaGVhZGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSXNTYW1lID0gZGVzY3JpcHRpb24gPT09IGNvbnRlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoIXRpdGxlSXNTYW1lIHx8ICFkZXNjcmlwdGlvbklzU2FtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRvYXN0c107XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdydScgPyAn0JfQsNC00LDQvdC40LUg0L7RgtGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC+JyA6ICdUaGUgdGFzayBoYXMgYmVlbiBlZGl0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAncnUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAn0JfQsNC00LDQvdC40LUg0YHQvtGF0YDQsNC90LXQvdC+INC4INCx0YPQtNC10YIg0LTQvtGB0YLRg9C/0L3QviDQsiDRgtC10LrRg9GJ0LXQvCDQstC40LTQtSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdUaGUgdGFzayBoYXMgYmVlbiBzYXZlZCBhbmQgd2lsbCBiZSBhdmFpbGFibGUgaW4gaXRzIGN1cnJlbnQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdiZy1zdWNjZXNzIHRleHQtbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGxhbmd1YWdlID09PSAncnUnID8gJ9Cj0YHQv9C10YUnIDogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBpZDogbWVzc2FnZXMubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUb2FzdHMobWVzc2FnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFt0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBlZGl0YWJsZVRhc2tPdXQgLSBkZWxldGUgJ2NvbnRlbnRlZGl0YWJsZScgYXR0ciBhZnRlciBmb2N1c1xuICAgICAqINGD0LTQsNC70Y/QtdGCINCw0YLRgNC40LHRg9GCICdjb250ZW50ZWRpdGFibGUnINC/0L7RgdC70LUg0L/QvtGC0LXRgNC4INGE0L7QutGD0YHQsCDRjdC70LXQvNC10L3RgtC+0LxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSAnc3Bhbicgb3IgJ3AnIGVsZW1lbnQgKGhlYWRpbmcgb3IgY29udGVudClcbiAgICAgKiDRjdC70LXQvNC10L3RgiAnc3Bhbicg0LjQu9C4ICdwJyDQt9Cw0LPQvtC70L7QstC60LAg0LjQu9C4INC60L7QvdGC0LXQvdGC0LAg0LfQsNC00LDRh9C4XG4gICAgICogQ0hBTkdFIFNUQVRFOiB0YXNrcywgc2V0Q3VycmVudEVkaXRhYmxlQnV0dG9uXG4gICAgICogU0VUIFNUT1JBR0U6IHRhc2tzXG4gICAgICogRVZFTlQ6IG9uQmx1clxuICAgICAqICovXG5cbiAgICBjb25zdCBlZGl0YWJsZVRhc2tPdXQgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbnRlbnQgfSA9IGVkaXRhYmxlQ29udGVudDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gaGVhZGluZyB8fCB0YXJnZXQgPT09IGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoZWFkaW5nLmNsb3Nlc3QoJ1tkYXRhLWlkZW50aWZ5XScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoY3VycmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRlbnRpZnknKSk7XG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IFsuLi50YXNrc10ubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb25dID0gaXNFZGl0aW5nVGFza1N1Y2Nlc3NmdWxseShoZWFkaW5nLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgLyogbXVzdCBiZSBpbiBhc3luY2hyb25vdXMgbW9kZSAqL1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50RWRpdGFibGVCdXR0b24obnVsbCksIDI1MCk7XG4gICAgICAgICAgICBzZXRUYXNrcyh0b2Rvcyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBlZGl0YWJsZVRhc2tJbiAtIHJlbW92aW5nIGFuICdjb250ZW50ZWRpdGFibGUnIGF0dHJpYnV0ZVxuICAgICAqIGZyb20gb25lIG9mIHR3byBlbGVtZW50cy4gRGVwZW5kcyBvbiB3aGljaCBlbGVtZW50IGlzIGluIGZvY3VzLlxuICAgICAqIElmIHRoZSB0aW1lciBpcyBhY3RpdmUsIGRlbGV0ZXMgaXQgYmVjYXVzZSB0aGUgaXRlbSBpcyBpbiBlZGl0IG1vZGVcbiAgICAgKiDRg9C00LDQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiAnY29udGVudGVkaXRhYmxlJyDRgyDQvtC00L3QvtCz0L4g0LjQtyDQtNCy0YPRhSDRjdC70LXQvNC10L3RgtC+0LJcbiAgICAgKiDRgtCw0LrQttC1INGB0LHRgNCw0YHRi9Cy0LDQtdGCINGC0LDQudC80LXRgCwg0LrQvtGC0L7RgNGL0Lkg0LTQvtC70LbQtdC9INCx0YvQuyDRg9C00LDQu9C40YLRjCDRgtC+0YIg0LbQtSDQsNGC0YDQuNCx0YPRglxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtICdzcGFuJyBvciAncCcgZWxlbWVudCAoaGVhZGluZyBvciBjb250ZW50KVxuICAgICAqINGN0LvQtdC80LXQvdGCICdzcGFuJyDQuNC70LggJ3AnINC30LDQs9C+0LvQvtCy0LrQsCDQuNC70Lgg0LrQvtC90YLQtdC90YLQsCDQt9Cw0LTQsNGH0LhcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHNldEN1cnJlbnRFZGl0YWJsZUJ1dHRvbiwgc2V0Q29udGVudEJlZm9yZUVkaXRcbiAgICAgKiBFVkVOVDogb25Gb2N1c1xuICAgICAqICovXG5cbiAgICBjb25zdCBlZGl0YWJsZVRhc2tJbiA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBoZWFkaW5nIHx8IHRhcmdldCA9PT0gY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkZW50aWZ5XScpO1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnRlcmZhY2U9XCJlZGl0XCJdJyk7XG4gICAgICAgICAgICBzZXRDb250ZW50QmVmb3JlRWRpdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGhlYWRpbmcudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNvbnRlbnQudGV4dENvbnRlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFZGl0YWJsZUJ1dHRvbihlZGl0QnRuKTtcbiAgICAgICAgICAgIGlmICh0b2dnbGVFZGl0YWJsZUF0dHJpYnV0ZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvZ2dsZUVkaXRhYmxlQXR0cmlidXRlVGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gaGVhZGluZykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBoZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGVkaXRhYmxlVGFza0VudHJ5IC0gYWRkaW5nIGFuICdjb250ZW50ZWRpdGFibGUnIGF0dHJpYnV0ZVxuICAgICAqIHdoZW4gd2lsbCB0aGUgZG91YmxlIGNsaWNrIGhhcHBlbi4gSWYgdGhlIHRhc2sgaXMgY29tcGxldGVkLCBlZGl0aW5nIGlzIG5vdCBhbGxvd2VkLlxuICAgICAqINC00L7QsdCw0LLQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiAnY29udGVudGVkaXRhYmxlJyDQv9GA0Lgg0LTQstC+0LnQvdC+0Lwg0LrQu9C40LrQtSDQvdCwINGN0LvQtdC80LXQvdGC0LUgJ3NwYW4nINC40LvQuCAncCdcbiAgICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxhbnkpfSB0YXJnZXQgLSAgZXhwZWN0ZWQgJ3NwYW4nIG9yICdwJyBlbGVtZW50IChoZWFkaW5nIG9yIGNvbnRlbnQpXG4gICAgICog0L7QttC40LTQsNC10YLRgdGPICdzcGFuJyDQuNC70LggJ3AnINGN0LvQtdC80LXQvdGC0YsgKNC30LDQs9C+0LvQvtCy0L7QuiDQuCDQvtC/0LjRgdCw0L3QuNC1KVxuICAgICAqIEVWRU5UOiBvbkRvdWJsZUNsaWNrXG4gICAgICogKi9cblxuICAgIGNvbnN0IGVkaXRhYmxlVGFza0VudHJ5ID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgaXNFZGl0YWJsZUNvbnRlbnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWVkaXQnKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGVudGlmeV0nKTtcbiAgICAgICAgY29uc3QgZWRpdEFsbG93ID0gIXRhc2s/LmNsYXNzTGlzdC5jb250YWlucygndGFzay1jb21wbGV0ZScpO1xuICAgICAgICBpZiAoaXNFZGl0YWJsZUNvbnRlbnQgJiYgZWRpdEFsbG93KSB7XG4gICAgICAgICAgICBjb25zdCBbaGVhZGluZywgY29udGVudF0gPSBzZXRFZGl0YWJsZSh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNIZWFkaW5nID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0JykgPT09ICdoZWFkaW5nJztcbiAgICAgICAgICAgIGNvbnN0IGlzQ29udGVudCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdCcpID09PSAnY29udGVudCc7XG4gICAgICAgICAgICBpZiAoaXNIZWFkaW5nKSB7XG4gICAgICAgICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgaGVhZGluZy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gZWRpdGFibGVUYXNrRXhpdCAtIHJlbW92aW5nIGFuICdjb250ZW50ZWRpdGFibGUnIGF0dHJpYnV0ZVxuICAgICAqIHdoZW4gcHJlc3NpbmcgdGhlIEVudGVyIGtleS5cbiAgICAgKiDRg9C00LDQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiAnY29udGVudGVkaXRhYmxlJyDQutC+0LPQtNCwINCx0YvQu9CwINC90LDQttCw0YLQsCDQutC70LDQstC40YjQsCBFbnRlclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtICdzcGFuJyBvciAncCcgZWxlbWVudCAoaGVhZGluZyBvciBjb250ZW50KVxuICAgICAqINC30LDQs9C+0LvQvtCy0L7QuiDQuNC70Lgg0L7Qv9C40YHQsNC90LjQtVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gY29kZSBvZiBjdXJyZW50IEtleVxuICAgICAqINC60L7QtCDQutC70LDQstC40YjQuFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hpZnRLZXkgLSBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlICdzaGlmdCcga2V5IGhhcyBiZWVuIHByZXNzZWRcbiAgICAgKiDQsdGL0LvQsCDQu9C4INC30LDQttCw0YLQsCDQutC70LDQstC40YjQsCAnc2hpZnQnXG4gICAgICogRVZFTlQ6IG9uS2V5RG93blxuICAgICAqICovXG5cbiAgICBjb25zdCBlZGl0YWJsZVRhc2tFeGl0ID0gKHsgdGFyZ2V0LCBjb2RlLCBzaGlmdEtleSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBjb25zdCB0YXJnZXRJc0VkaXRhYmxlID0gdGFyZ2V0ID09PSBoZWFkaW5nIHx8IHRhcmdldCA9PT0gY29udGVudDtcbiAgICAgICAgaWYgKHRhcmdldElzRWRpdGFibGUgJiYgY29kZSA9PT0gJ0VudGVyJyAmJiAhc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGhlYWRpbmcucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAqIFRhc2sgYnV0dG9uIGV2ZW50c1xuICAgICAqINGB0L7QsdGL0YLQuNGPINC40L3RgtC10YDRhNC10LnRgdCwINC30LDQtNCw0L3QuNGPICjQstCw0LbQvdC+LCDRg9C00LDQu9C40YLRjCwg0LLRi9C/0L7Qu9C90LXQvdC+LCDRgNC10LTQsNC60YLQuNGA0L7QstCw0YLRjClcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBvbkltcG9ydGFudCAtIG1hcmtzIHRoZSB0YXNrIGFzIGltcG9ydGFudC91bmltcG9ydGFudFxuICAgICAqINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC30LDQtNCw0L3QuNC1INC60LDQuiDQstCw0LbQvdC+0LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBidXR0b24gb2YgdGFzayAoaW1wb3J0YW50KVxuICAgICAqINC60L3QvtC/0LrQsCDQt9Cw0LTQsNC90LjRjyAo0LLQsNC20L3QvilcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHRhc2tzXG4gICAgICogU0VUIFNUT1JBR0U6IHRhc2tzXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uSW1wb3J0YW50ID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb250ZW50IH0gPSBlZGl0YWJsZUNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGVudGlmeV0nKTtcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIocGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZGVudGlmeScpKTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBbLi4udGFza3NdLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgLyogaWYgdGhlIGRpc3BsYXllZCB0YXNrcyBhcmUgaW1wb3J0YW50LCBoaWRlIHRoZW0gKi9cbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IGZpbHRlckJ1dHRvbiA9PT0gJ2ltcG9ydGFudCc7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhc2ssIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiAhdGFzay5pbXBvcnRhbnQsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGFza3ModG9kb3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgICAvKiBpZiBvbmx5IGltcG9ydGFudCB0YXNrcyBhcmUgZGlzcGxheWVkIGF0IHRoZSBtb21lbnQgKi9cbiAgICAgICAgaWYgKGZpbHRlckJ1dHRvbiA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIC8qIGlzIHRoZXJlIGF0IGxlYXN0IG9uZSB3aXRoIGEgZmxhZyBpbXBvcnRhbnQ6IHRydWUgKi9cbiAgICAgICAgICAgIGNvbnN0IGFyZVRoZXJlSW1wb3J0YW50VGFza3MgPSB0b2Rvcy5zb21lKCh0YXNrKSA9PiB0YXNrLmltcG9ydGFudCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAvKiBpZiBub3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHNob3dBY3RpdmVUYXNrcyBhbmQgc2hvdyBhbGwgYWN0aXZlIHRhc2tzICovXG4gICAgICAgICAgICBpZiAoIWFyZVRoZXJlSW1wb3J0YW50VGFza3MpIHtcbiAgICAgICAgICAgICAgICBzaG93QWN0aXZlVGFza3Moe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFjdGl2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBkZWxldGUgY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZSAodGhpcyBtYXkgYmUgdXNlZnVsKSAqL1xuICAgICAgICBoZWFkaW5nPy5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICBjb250ZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gb25Db21wbGV0ZWQgLSBtYXJrcyB0aGUgdGFzayBhcyBjb21wbGV0ZWQvdW5maW5pc2hlZFxuICAgICAqINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC30LDQtNCw0L3QuNC1INC60LDQuiDQt9Cw0LLQtdGA0YjQtdC90L3QvtC1XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gYnV0dG9uIG9mIHRhc2sgKGNvbXBsZXRlZClcbiAgICAgKiDQutC90L7Qv9C60LAg0LfQsNC00LDQvdC40Y8gKNC30LDQstC10YDRiNC10L3QvilcbiAgICAgKiBDSEFOR0UgU1RBVEU6IHRhc2tzXG4gICAgICogU0VUIFNUT1JBR0U6IHRhc2tzXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uQ29tcGxldGVkID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb250ZW50IH0gPSBlZGl0YWJsZUNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGVudGlmeV0nKTtcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIocGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZGVudGlmeScpKTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBbLi4udGFza3NdLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgLyogaWYgdGhlIGRpc3BsYXllZCB0YXNrcyBhcmUgaW1wb3J0YW50LCBoaWRlIHRoZW0gKi9cbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxldGVkR3JvdXBEaXNwbGF5ID0gZmlsdGVyQnV0dG9uID09PSAnY29tcGxldGVkJztcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlR3JvdXBEaXNwbGF5ID0gZmlsdGVyQnV0dG9uID09PSAnYWN0aXZlJztcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IGlzQ29tcGxldGVkR3JvdXBEaXNwbGF5IHx8IGlzQWN0aXZlR3JvdXBEaXNwbGF5O1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogIXRhc2suY29tcGxldGVkLFxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRhc2tzKHRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgLyogaWYgb25seSBjb21wbGV0ZWQgdGFza3MgYXJlIGRpc3BsYXllZCBhdCB0aGUgbW9tZW50ICovXG4gICAgICAgIGlmIChmaWx0ZXJCdXR0b24gPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAvKiBpcyB0aGVyZSBhdCBsZWFzdCBvbmUgd2l0aCBhIGZsYWcgY29tcGxldGVkOiB0cnVlICovXG4gICAgICAgICAgICBjb25zdCBhcmVUaGVyZUNvbXBsZXRlZFRhc2tzID0gdG9kb3Muc29tZSgodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgICAgICAgICAgLyogaWYgbm90LCBjYWxsIHRoZSBmdW5jdGlvbiBzaG93QWN0aXZlVGFza3MgYW5kIHNob3cgYWxsIGFjdGl2ZSB0YXNrcyAqL1xuICAgICAgICAgICAgaWYgKCFhcmVUaGVyZUNvbXBsZXRlZFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZVRhc2tzKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhY3RpdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZGVsZXRlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgKHRoaXMgbWF5IGJlIHVzZWZ1bCkgKi9cbiAgICAgICAgaGVhZGluZz8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgY29udGVudD8ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uRGVsZXRlIC0gcmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGUgYXBwbGljYXRpb25cbiAgICAgKiDRg9C00LDQu9GP0LXRgiDQt9Cw0LTQsNC90LjQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIGJ1dHRvbiBvZiB0YXNrIChkZWxldGVkKVxuICAgICAqINC60L3QvtC/0LrQsCDQt9Cw0LTQsNC90LjRjyAo0YPQtNCw0LvQuNGC0YwpXG4gICAgICogQ0hBTkdFIFNUQVRFOiB0YXNrc1xuICAgICAqIFNFVCBTVE9SQUdFOiB0YXNrcywgdG9hc3RzXG4gICAgICogKi9cblxuICAgIGNvbnN0IG9uRGVsZXRlZCA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29udGVudCB9ID0gZWRpdGFibGVDb250ZW50O1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRlbnRpZnldJyk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRlbnRpZnknKSk7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gWy4uLnRhc2tzXS5maWx0ZXIoKHsgaWQ6IHRhc2tJRCB9KSA9PiB0YXNrSUQgIT09IGlkKTtcbiAgICAgICAgc2V0VGFza3ModG9kb3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgICAvKiBpZiBvbmx5IGNvbXBsZXRlZCB0YXNrcyBhcmUgZGlzcGxheWVkIGF0IHRoZSBtb21lbnQgKi9cbiAgICAgICAgaWYgKGZpbHRlckJ1dHRvbiA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIC8qIGlzIHRoZXJlIGF0IGxlYXN0IG9uZSB3aXRoIGEgZmxhZyBjb21wbGV0ZWQ6IHRydWUgKi9cbiAgICAgICAgICAgIGNvbnN0IGFyZVRoZXJlQ29tcGxldGVkVGFza3MgPSB0b2Rvcy5zb21lKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAvKiBpZiBub3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHNob3dBY3RpdmVUYXNrcyBhbmQgc2hvdyBhbGwgYWN0aXZlIHRhc2tzICovXG4gICAgICAgICAgICBpZiAoIWFyZVRoZXJlQ29tcGxldGVkVGFza3MpIHtcbiAgICAgICAgICAgICAgICBzaG93QWN0aXZlVGFza3Moe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFjdGl2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBpZiBvbmx5IGltcG9ydGFudCB0YXNrcyBhcmUgZGlzcGxheWVkIGF0IHRoZSBtb21lbnQgKi9cbiAgICAgICAgaWYgKGZpbHRlckJ1dHRvbiA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIC8qIGlzIHRoZXJlIGF0IGxlYXN0IG9uZSB3aXRoIGEgZmxhZyBpbXBvcnRhbnQ6IHRydWUgKi9cbiAgICAgICAgICAgIGNvbnN0IGFyZVRoZXJlSW1wb3J0YW50VGFza3MgPSB0b2Rvcy5zb21lKCh0YXNrKSA9PiB0YXNrLmltcG9ydGFudCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAvKiBpZiBub3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHNob3dBY3RpdmVUYXNrcyBhbmQgc2hvdyBhbGwgYWN0aXZlIHRhc2tzICovXG4gICAgICAgICAgICBpZiAoIWFyZVRoZXJlSW1wb3J0YW50VGFza3MpIHtcbiAgICAgICAgICAgICAgICBzaG93QWN0aXZlVGFza3Moe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFjdGl2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBkZWxldGUgY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZSAodGhpcyBtYXkgYmUgdXNlZnVsKSAqL1xuICAgICAgICBoZWFkaW5nPy5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICBjb250ZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAvKiBzaG93IG1lc3NhZ2UgKi9cbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4udG9hc3RzXTtcbiAgICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogbGFuZ3VhZ2UgPT09ICdydScgPyAn0JfQsNC00LDQvdC40LUg0YPQtNCw0LvQtdC90L4nIDogJ1Rhc2sgZGVsZXRlZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQo9C00LDQu9C10L3QuNC1INC/0YDQvtGI0LvQviDRg9GB0L/QtdGI0L3QvicgOiAnVGhlIGRlbGV0aW9uIHdhcyBzdWNjZXNzZnVsJyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdiZy1zdWNjZXNzIHRleHQtbGlnaHQnLFxuICAgICAgICAgICAgc3RhdHVzOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQo9GB0L/QtdGFJyA6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlcy5sZW5ndGggKyAxLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VG9hc3RzKG1lc3NhZ2VzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIG9uRWRpdCAtIGVkaXRzIGEgdGFza1xuICAgICAqINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC30LDQtNCw0L3QuNC1INC60LDQuiDRgNC10LTQsNC60YLQuNGA0YPQtdC80L7QtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIGJ1dHRvbiBvZiB0YXNrIChlZGl0aW5nKVxuICAgICAqINC60L3QvtC/0LrQsCDQt9Cw0LTQsNC90LjRjyAo0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwpXG4gICAgICogQ2xlYXJzIHRoZSBwcmV2aW91cyB0aW1lb3V0IGFuZCBzZXRzIGEgbmV3IHRpbWVyXG4gICAgICogQ0hBTkdFIFNUQVRFOiBjdXJyZW50RWRpdGFibGVCdXR0b25cbiAgICAgKiAqL1xuXG4gICAgY29uc3Qgb25FZGl0aW5nID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgW2hlYWRpbmcsIGNvbnRlbnRdID0gc2V0RWRpdGFibGUodGFyZ2V0KTtcbiAgICAgICAgaWYgKGN1cnJlbnRFZGl0YWJsZUJ1dHRvbiA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RWRpdGFibGVCdXR0b24obnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRvZ2dsZUVkaXRhYmxlQXR0cmlidXRlVGltZXIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZUF0dHJpYnV0ZVRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IGRlbGV0ZUNvbnRlbnRlZGl0YWJsZUF0dHIoaGVhZGluZywgY29udGVudCksXG4gICAgICAgICAgICA0MDAwLFxuICAgICAgICApO1xuICAgICAgICBjb250ZW50LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgIGhlYWRpbmcudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICB9O1xuXG4gICAgLyogRXZlbnRzIGZvciB0YXNrcyAqL1xuICAgIGNvbnN0IHRhc2tCdG5FdmVudHMgPSB7IG9uSW1wb3J0YW50LCBvbkNvbXBsZXRlZCwgb25EZWxldGVkLCBvbkVkaXRpbmcgfTtcbiAgICBjb25zdCB0YXNrQ2FyZEV2ZW50cyA9IHsgZWRpdGFibGVUYXNrSW4sIGVkaXRhYmxlVGFza091dCB9O1xuICAgIGNvbnN0IHRhc2tDYXJkQWRkID0geyBlZGl0YWJsZVRhc2tFbnRyeSwgZWRpdGFibGVUYXNrRXhpdCB9O1xuICAgIGNvbnN0IHRhc2tFdmVudHMgPSB7IC4uLnRhc2tCdG5FdmVudHMsIC4uLnRhc2tDYXJkRXZlbnRzLCAuLi50YXNrQ2FyZEFkZCwgc2V0RWRpdGFibGUgfTtcbiAgICAvKiBBZGRpbmcgZXZlbnRzIHRvIHN3aXRjaCB0YXNrcyAqL1xuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSB7IHNob3dBbGxUYXNrcywgc2hvd0FjdGl2ZVRhc2tzIH07XG4gICAgY29uc3QgdGFza1N0YXR1c0FkZCA9IHsgc2hvd0NvbXBsZXRlZFRhc2tzLCBzaG93SW1wb3J0YW50VGFza3MgfTtcbiAgICBjb25zdCB0YXNrVG9nZ2xlID0geyAuLi50YXNrU3RhdHVzLCAuLi50YXNrU3RhdHVzQWRkIH07XG5cbiAgICAvKiBFdmVudHMgZm9yIHNlbmRpbmcgYSB0YXNrICovXG4gICAgY29uc3Qgc3VibWl0SW5wdXRFdmVudHMgPSB7IG9uSW5wdXRUaXRsZSwgb25JbnB1dERlc2NyaXB0aW9uLCBvbkRlYWRsaW5lRW5hYmxlIH07XG4gICAgY29uc3Qgc3VibWl0Q2hlY2tib3hFdmVudHMgPSB7IG9uQ2hhbmdlSW1wb3J0YW50LCBvbkNoYW5nZUNvbXBsZXRlZCB9O1xuICAgIGNvbnN0IHN1Ym1pdEV2ZW50cyA9IHsgLi4uc3VibWl0SW5wdXRFdmVudHMsIC4uLnN1Ym1pdENoZWNrYm94RXZlbnRzIH07XG4gICAgLyogU3RhdGUgZm9yIGlucHV0cyBhbmQgY2hlY2tib3hlcyAqL1xuICAgIGNvbnN0IHN1Ym1pdElucHV0U3RhdGUgPSB7IHN1Ym1pdFRpdGxlLCBzdWJtaXREZXNjcmlwdGlvbiwgaGFuZGxlRGF0ZUNoYW5nZSwgc2VsZWN0ZWREYXRlIH07XG4gICAgY29uc3Qgc3VibWl0Q2hlY2tib3hTdGF0ZSA9IHsgc3VibWl0SW1wb3J0YW50LCBzdWJtaXRDb21wbGV0ZWQsIHN1Ym1pdERlYWRsaW5lIH07XG4gICAgY29uc3Qgc3VibWl0U3RhdGUgPSB7IC4uLnN1Ym1pdElucHV0U3RhdGUsIC4uLnN1Ym1pdENoZWNrYm94U3RhdGUgfTtcbiAgICBjb25zdCBzdWJtaXQgPSB7IGFkZFRhc2ssIC4uLnN1Ym1pdEV2ZW50cywgLi4uc3VibWl0U3RhdGUsIHNlbmRWYWxpZGF0aW9uIH07XG5cbiAgICAvKiBTdGF0ZSBhbmQgZXZlbnRzIGZvciBzZWFyY2ggdGFza3MgKi9cbiAgICBjb25zdCBzZWFyY2ggPSB7IHNlYXJjaFRhc2tzLCBzZWFyY2hUYXNrc1ZhbHVlIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bGFuZ3VhZ2V9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgb25DaGFuZ2VUaGVtZT17b25DaGFuZ2VUaGVtZX0gdGhlbWU9e3RoZW1lfSBzZXRMYW5ndWFnZT17c2V0TGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgICAgICAgICAgICAgIHRhc2tFdmVudHM9e3Rhc2tFdmVudHN9XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUb2dnbGU9e3Rhc2tUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQ9e3N1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgdGFza3M9e3Rhc2tzfVxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZXMgdG9hc3RzPXt0b2FzdHN9IHNldFRvYXN0cz17c2V0VG9hc3RzfSAvPlxuICAgICAgICAgICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ2Jvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IENvbGxhcHNlIH07XHJcbiIsImltcG9ydCAnLi9jc3MnO1xyXG5pbXBvcnQgJy4vanMnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcclxuaW1wb3J0ICcuLi9pbmRleC5odG1sJztcclxuaW1wb3J0ICcuL2xpYnJhcnknO1xyXG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Fzcyc7XHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHJlc3VsdCA9IGZuKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdF9qYXZhc2NyaXB0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdF9qYXZhc2NyaXB0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzE3XSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDY5ODEpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMTddLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oODg1OCk7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==