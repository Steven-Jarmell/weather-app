/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
function convertData(data) {
    const {
        name: cityName,
        main: { 
            temp: temperature, 
            feels_like: feelsLike, 
            humidity 
        },
        wind: { 
            speed: windSpeed 
        },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
}

async function getData(cityName) {
    let API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=48c0ed550c8325123d9d568b10b6c177`;
    try {
        const response = await fetch(API_URL, {mode: "cors"});
        if (!response.ok) {
            throw new Error(`${city} not found`);
        }
        return convertData(await response.json());
    }
    catch (error) {
        alert(error);
        return null;
    }
}



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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const searchForm = document.getElementById('searchForm');
const searchItem = document.getElementById('search-bar');
const submitBtn = document.querySelector('.submit-btn');
const mode = document.querySelector('.toggle-input');
let dataType = false; // True -> Fahrenheit ; False -> Celsius
let submitted = false;

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');

submitBtn.addEventListener('click', async (e) => {
    if (searchItem.value === "") return;

    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getData)(searchItem.value);

    submitted = true;
    const displayContent = document.querySelector('.search-result');
    displayContent.classList.add('visible');

    const cityName = document.querySelector('.cityName');
    cityName.innerText = data.cityName;

    if (dataType) {
        temperature.innerText = 'Temperature: ' + convertToFahrenheit(data.temperature);
        feelsLike.innerText = 'Feels Like: ' + convertToFahrenheit(data.feelsLike);
    }
    else {
        temperature.innerText = 'Temperature: ' + Math.round(data.temperature);
        feelsLike.innerText = 'Feels Like: ' + Math.round(data.feelsLike);
    }

    const humidity = document.querySelector('.humidity');
    humidity.innerText = 'Humidity: ' + data.humidity + '%';
});

mode.addEventListener('click', (e) => {
    dataType = !dataType;

    if (searchItem.value === "" || !submitted) return;

    if (dataType) {
        temperature.innerText = 'Temperature: ' + convertToFahrenheit(parseInt(temperature.innerText.split(' ')[1]));
        feelsLike.innerText = 'Feels Like: ' + convertToFahrenheit(parseInt(feelsLike.innerText.split(' ')[2]));
    }
    else {
        temperature.innerText = 'Temperature: ' + convertToCelsius(parseInt(temperature.innerText.split(' ')[1]));
        feelsLike.innerText = 'Feels Like: ' + convertToCelsius(parseInt(feelsLike.innerText.split(' ')[2]));
    }
});

function convertToFahrenheit(number) {
    return Math.round(number * (9/5) + 32);
}

function convertToCelsius(number) {
    return Math.round((number - 32) * (5/9));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUztBQUMvRTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0EsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWU6IGNpdHlOYW1lLFxyXG4gICAgICAgIG1haW46IHsgXHJcbiAgICAgICAgICAgIHRlbXA6IHRlbXBlcmF0dXJlLCBcclxuICAgICAgICAgICAgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBcclxuICAgICAgICAgICAgaHVtaWRpdHkgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aW5kOiB7IFxyXG4gICAgICAgICAgICBzcGVlZDogd2luZFNwZWVkIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gPSBkYXRhO1xyXG4gICAgICByZXR1cm4geyBjaXR5TmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHlOYW1lKSB7XHJcbiAgICBsZXQgQVBJX1VSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9bWV0cmljJkFQUElEPTQ4YzBlZDU1MGM4MzI1MTIzZDlkNTY4YjEwYjZjMTc3YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMLCB7bW9kZTogXCJjb3JzXCJ9KTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjaXR5fSBub3QgZm91bmRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldERhdGEgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcblxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm0nKTtcclxuY29uc3Qgc2VhcmNoSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWlucHV0Jyk7XHJcbmxldCBkYXRhVHlwZSA9IGZhbHNlOyAvLyBUcnVlIC0+IEZhaHJlbmhlaXQgOyBGYWxzZSAtPiBDZWxzaXVzXHJcbmxldCBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XHJcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoSXRlbS52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHNlYXJjaEl0ZW0udmFsdWUpO1xyXG5cclxuICAgIHN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICBjb25zdCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcbiAgICBkaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcblxyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eU5hbWUnKTtcclxuICAgIGNpdHlOYW1lLmlubmVyVGV4dCA9IGRhdGEuY2l0eU5hbWU7XHJcblxyXG4gICAgaWYgKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gJ1RlbXBlcmF0dXJlOiAnICsgY29udmVydFRvRmFocmVuaGVpdChkYXRhLnRlbXBlcmF0dXJlKTtcclxuICAgICAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gJ0ZlZWxzIExpa2U6ICcgKyBjb252ZXJ0VG9GYWhyZW5oZWl0KGRhdGEuZmVlbHNMaWtlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9ICdUZW1wZXJhdHVyZTogJyArIE1hdGgucm91bmQoZGF0YS50ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9ICdGZWVscyBMaWtlOiAnICsgTWF0aC5yb3VuZChkYXRhLmZlZWxzTGlrZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9ICdIdW1pZGl0eTogJyArIGRhdGEuaHVtaWRpdHkgKyAnJSc7XHJcbn0pO1xyXG5cclxubW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkYXRhVHlwZSA9ICFkYXRhVHlwZTtcclxuXHJcbiAgICBpZiAoc2VhcmNoSXRlbS52YWx1ZSA9PT0gXCJcIiB8fCAhc3VibWl0dGVkKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gJ1RlbXBlcmF0dXJlOiAnICsgY29udmVydFRvRmFocmVuaGVpdChwYXJzZUludCh0ZW1wZXJhdHVyZS5pbm5lclRleHQuc3BsaXQoJyAnKVsxXSkpO1xyXG4gICAgICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSAnRmVlbHMgTGlrZTogJyArIGNvbnZlcnRUb0ZhaHJlbmhlaXQocGFyc2VJbnQoZmVlbHNMaWtlLmlubmVyVGV4dC5zcGxpdCgnICcpWzJdKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSAnVGVtcGVyYXR1cmU6ICcgKyBjb252ZXJ0VG9DZWxzaXVzKHBhcnNlSW50KHRlbXBlcmF0dXJlLmlubmVyVGV4dC5zcGxpdCgnICcpWzFdKSk7XHJcbiAgICAgICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9ICdGZWVscyBMaWtlOiAnICsgY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludChmZWVsc0xpa2UuaW5uZXJUZXh0LnNwbGl0KCcgJylbMl0pKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogKDkvNSkgKyAzMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0NlbHNpdXMobnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtYmVyIC0gMzIpICogKDUvOSkpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9