(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._owner=e.owner,this._id=e._id,this._templateElement=n,this._handleCardClick=o,this._handleDelClick=r,this._handleLikeClick=i,this._handleRemoveLikeClick=u,this._isLiked=this._likes.includes(),this._likesCount=this._likes.length}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._templateElement.content.cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".elements__image").src=this._link,this._element.querySelector(".elements__image").alt=this._name,this._element.querySelector(".elements__title").textContent=this._name,this._likes?this._element.querySelector(".elements__likes-count").textContent=this._likesCount:this._element.querySelector(".elements__likes-count").textContent="0",this._isLiked&&this._element.querySelector(".elements__like-button").classList.add("elements__like-button_liked"),this._element}},{key:"deleteCard",value:function(e){e.remove()}},{key:"toggleLike",value:function(e){this._isLiked?(e.target.classList.remove("elements__like-button_liked"),this._isLiked=!this._isLiked,this._likesCount-=1,e.target.closest(".elements__like-container").querySelector(".elements__likes-count").textContent=this._likesCount):(e.target.classList.add("elements__like-button_liked"),this._isLiked=!this._isLiked,this._likesCount+=1,e.target.closest(".elements__like-container").querySelector(".elements__likes-count").textContent=this._likesCount)}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".elements__delete-button");t&&t.addEventListener("click",(function(t){e._handleDelClick(e,t.target)})),this._element.querySelector(".elements__like-button").addEventListener("click",(function(t){e._isLiked?e._handleRemoveLikeClick(t,e):e._handleLikeClick(t,e)})),this._element.querySelector(".elements__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._obj=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._obj.formInputSelector)),this._buttonElement=this._formElement.querySelector(this._obj.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e,t){var n=e.closest(this._obj.formSelector).querySelector(".".concat(e.id,"-error"));e.classList.add(this._obj.inputErrorClass),n.textContent=t,n.classList.add(this._obj.errorClass)}},{key:"_hideInputError",value:function(e){var t=e.closest(this._obj.formSelector).querySelector(".".concat(e.id,"-error"));e.classList.remove(this._obj.inputErrorClass),t.classList.remove(this._obj.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.remove(this._obj.activeButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.add(this._obj.activeButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("pop-up-container_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("pop-up-container_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(e.preventDefault(),this.close())}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("pop-up-container")&&e.close()})),this._popupElement.querySelector(".pop-up__close").addEventListener("click",(function(){e.close()}))}}])&&r(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(r){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popupElement.querySelector(".pop-up__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._form.querySelectorAll(".pop-up__input")).forEach((function(t){e.input.name=input.value})),e}},{key:"setEventListeners",value:function(){var e=this;c(p(u.prototype),"setEventListeners",this).call(this),this._popupElement.querySelector(".pop-up__form").addEventListener("submit",(function(t){e._handleFormSubmit(t)}))}},{key:"close",value:function(){c(p(u.prototype),"close",this).call(this),this._form.reset()}}])&&a(t.prototype,n),u}(i);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupMainImage=t._popupElement.querySelector(".pop-up__image"),t._popupSubtitle=t._popupElement.querySelector(".pop-up__text"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupMainImage.src=e,this._popupMainImage.alt=t,this._popupSubtitle.textContent=t,y(v(u.prototype),"open",this).call(this)}}])&&h(t.prototype,n),u}(i);function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o.reverse(),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e.addItem(e._renderer(t))}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&k(t.prototype,n),e}(),S=document.querySelector(".profile__button"),E=document.querySelector(".profile__add-button"),C=document.querySelector(".profile__avatar"),w=document.querySelector(".profile__name"),L=document.querySelector(".profile__text"),O=document.querySelector(".profile__wrapper"),j=document.querySelector(".elements"),q=document.querySelector(".pop-up-container_type_profile").querySelector(".pop-up"),R=q.querySelector(".pop-up__input_type_name"),P=q.querySelector(".pop-up__input_type_job"),I=(q.querySelector(".pop-up__close"),q.querySelector(".pop-up__submit")),T=document.querySelector(".pop-up-container_type_avatar"),x=T.querySelector("#avatar-link-input"),D=T.querySelector(".pop-up__form_type_avatar"),z=T.querySelector(".pop-up__submit"),B=document.querySelector(".pop-up-container_type_card-add"),A=B.querySelector(".pop-up__form_type_cards-add"),N=(B.querySelector(".pop-up__close"),B.querySelector(".pop-up__input_type_card-name")),U=B.querySelector(".pop-up__input_type_card-link"),V=B.querySelector(".pop-up__submit"),F=document.querySelector(".pop-up-container_type_image"),M=(F.querySelector(".pop-up__image"),F.querySelector(".pop-up__text"),F.querySelector(".pop-up__close"),j.querySelector(".elements__likes-count"),{formSelector:".pop-up__form",inputErrorClass:"pop-up__input_type_error",errorClass:"pop-up__input-error_active",activeButtonClass:"pop-up__submit_active",formInputSelector:".pop-up__input",submitButtonSelector:".pop-up__submit"}),J=document.querySelector("#li__template"),H=document.querySelector("#li__template_not-deleatable");function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var K=function(){function e(t){var n=t.userNameSelector,o=t.userInfoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=n,this._userInfoSelector=o,this._id=""}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:w.textContent,userInfo:L.textContent}}},{key:"setUserInfo",value:function(e,t){this._userNameSelector.textContent=e,this._userInfoSelector.textContent=t}}])&&G(t.prototype,n),e}();function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._authorizationToken=t.token}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return console.log(e),e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{headers:{authorization:this._authorizationToken}}).then((function(t){return e._getResponseData(t)}))}},{key:"getDefaultCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{headers:{authorization:this._authorizationToken}}).then((function(t){return e._getResponseData(t)}))}},{key:"patchUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"postCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e._id),{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"addlikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}}])&&Q(t.prototype,n),e}();function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t,n){return(Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=te(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(o);if(r){var n=te(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ee(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n}return t=u,(n=[{key:"open",value:function(e,t){Z(te(u.prototype),"open",this).call(this),this._card=e,this._cardElement=t.closest(".elements__item"),console.log(this._card)}},{key:"setEventListeners",value:function(){var e=this;Z(te(u.prototype),"setEventListeners",this).call(this),this._popupElement.querySelector(".pop-up__form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._card,e._cardElement),Z(te(u.prototype),"close",e).call(e)}))}}])&&Y(t.prototype,n),u}(i);function oe(e){return e.owner._id===he._id?new t(e,J,re,ie,ue,ae).createCard():new t(e,H,re,ie,ue,ae).createCard()}function re(e,t){le.open(t,e)}function ie(e,t){_e.open(e,t)}function ue(e,t){ye.addlikeCard(t).then((function(){t.toggleLike(e)})).catch((function(e){console.log(e)}))}function ae(e,t){ye.removeLikeCard(t).then((function(){t.toggleLike(e)})).catch((function(e){console.log(e)}))}S.addEventListener("click",(function(){R.value=he.getUserInfo().userName,P.value=he.getUserInfo().userInfo,se.open()})),E.addEventListener("click",(function(){ce.resetValidation(),fe.open()})),O.addEventListener("click",(function(){pe.open()})),new o(M,q).enableValidation();var ce=new o(M,A);ce.enableValidation(),new o(M,D).enableValidation();var le=new b(".pop-up-container_type_image");le.setEventListeners();var se=new f(".pop-up-container_type_profile",(function(e){e.preventDefault(),I.textContent="Загрузка...",ye.patchUserInfo(R.value,P.value).then((function(e){console.log(e.name,e.about),he.setUserInfo(e.name,e.about)})).then((function(){se.close()})).catch((function(e){console.log(e)})).finally((function(){I.textContent="Сохранить"}))}));se.setEventListeners();var pe=new f(".pop-up-container_type_avatar",(function(e){e.preventDefault(),z.textContent="Загрузка...",ye.patchAvatar(x.value).then((function(e){C.src=e.avatar})).then((function(){pe.close()})).catch((function(e){console.log(e)})).finally((function(){z.textContent="Сохранить"}))}));pe.setEventListeners();var fe=new f(".pop-up-container_type_card-add",(function(e){e.preventDefault(),V.textContent="Загрузка...",ye.postCard(N.value,U.value).then((function(e){new g({items:[e],renderer:oe},j).renderItems()})).then((function(){fe.close()})).catch((function(e){console.log(e)})).finally((function(){V.textContent="Сохранить"}))}));fe.setEventListeners();var _e=new ne(".pop-up-container_type_cards-del",(function(e,t){ye.deleteCard(e).then((function(){e.deleteCard(t)})).catch((function(e){console.log(e)}))}));_e.setEventListeners();var he=new K({userNameSelector:w,userInfoSelector:L}),ye=new W({url:"https://mesto.nomoreparties.co/v1/cohort-21/",token:"ead2bc08-76d8-467e-bb45-32710c654284"});Promise.all([ye.getUserInfo(),ye.getDefaultCards()]).then((function(e){console.log(e);var t=e[0],n=e[1];C.src=t.avatar,w.textContent=t.name,L.textContent=t.about,he._id=t._id,new g({items:n,renderer:oe},j).renderItems()})).catch((function(e){console.log(e)}))})();