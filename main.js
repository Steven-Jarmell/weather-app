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

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');

submitBtn.addEventListener('click', async (e) => {
    if (searchItem.value === "") return;
    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getData)(searchItem.value);

    const cityName = document.querySelector('.cityName');
    cityName.innerText = data.cityName;

    if (dataType) {
        temperature.innerText = convertToFahrenheit(data.temperature);
        feelsLike.innerText = convertToFahrenheit(data.feelsLike);
    }
    else {
        temperature.innerText = data.temperature;
        feelsLike.innerText = data.feelsLike;
    }

    const humidity = document.querySelector('.humidity');
    humidity.innerText = data.humidity;
});

mode.addEventListener('click', (e) => {
    dataType = !dataType;

    if (dataType) {
        temperature.innerText = convertToFahrenheit(parseInt(temperature.innerText));
        feelsLike.innerText = convertToFahrenheit(parseInt(feelsLike.innerText));
    }
    else {
        temperature.innerText = convertToCelsius(parseInt(temperature.innerText));
        feelsLike.innerText = convertToCelsius(parseInt(feelsLike.innerText));
    }
});

function convertToFahrenheit(number) {
    return Math.round((number * (9/5) + 32) * 100)/100;
}

function convertToCelsius(number) {
    return Math.round((number - 32) * (5/9) * 100)/100;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUztBQUMvRTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0EsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbmFtZTogY2l0eU5hbWUsXHJcbiAgICAgICAgbWFpbjogeyBcclxuICAgICAgICAgICAgdGVtcDogdGVtcGVyYXR1cmUsIFxyXG4gICAgICAgICAgICBmZWVsc19saWtlOiBmZWVsc0xpa2UsIFxyXG4gICAgICAgICAgICBodW1pZGl0eSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbmQ6IHsgXHJcbiAgICAgICAgICAgIHNwZWVkOiB3aW5kU3BlZWQgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA9IGRhdGE7XHJcbiAgICAgIHJldHVybiB7IGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eU5hbWUpIHtcclxuICAgIGxldCBBUElfVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZ1bml0cz1tZXRyaWMmQVBQSUQ9NDhjMGVkNTUwYzgzMjUxMjNkOWQ1NjhiMTBiNmMxNzdgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwsIHttb2RlOiBcImNvcnNcIn0pO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NpdHl9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0RGF0YSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xyXG5jb25zdCBzZWFyY2hJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcclxuY29uc3QgbW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtaW5wdXQnKTtcclxubGV0IGRhdGFUeXBlID0gZmFsc2U7IC8vIFRydWUgLT4gRmFocmVuaGVpdCA7IEZhbHNlIC0+IENlbHNpdXNcclxuXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XHJcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoSXRlbS52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoc2VhcmNoSXRlbS52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eU5hbWUnKTtcclxuICAgIGNpdHlOYW1lLmlubmVyVGV4dCA9IGRhdGEuY2l0eU5hbWU7XHJcblxyXG4gICAgaWYgKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gY29udmVydFRvRmFocmVuaGVpdChkYXRhLnRlbXBlcmF0dXJlKTtcclxuICAgICAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gY29udmVydFRvRmFocmVuaGVpdChkYXRhLmZlZWxzTGlrZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBkYXRhLnRlbXBlcmF0dXJlO1xyXG4gICAgICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSBkYXRhLmZlZWxzTGlrZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xyXG4gICAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gZGF0YS5odW1pZGl0eTtcclxufSk7XHJcblxyXG5tb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGRhdGFUeXBlID0gIWRhdGFUeXBlO1xyXG5cclxuICAgIGlmIChkYXRhVHlwZSkge1xyXG4gICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQocGFyc2VJbnQodGVtcGVyYXR1cmUuaW5uZXJUZXh0KSk7XHJcbiAgICAgICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQocGFyc2VJbnQoZmVlbHNMaWtlLmlubmVyVGV4dCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludCh0ZW1wZXJhdHVyZS5pbm5lclRleHQpKTtcclxuICAgICAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludChmZWVsc0xpa2UuaW5uZXJUZXh0KSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdChudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChudW1iZXIgKiAoOS81KSArIDMyKSAqIDEwMCkvMTAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9DZWxzaXVzKG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG51bWJlciAtIDMyKSAqICg1LzkpICogMTAwKS8xMDA7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=