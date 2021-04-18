import notification from './notification';
import './styles.css';
import isAlpha from 'validator/lib/isAlpha';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import tempCountryMkp from './templates/country.hbs';
import tempCountriesListMkp from './templates/list-countries.hbs';

const countryContainerRef = document.querySelector(".country-container")
const inputRef = document.querySelector(".input")

inputRef.addEventListener('input', debounce(onInput, 500));
function onInput(e) {
    if (!isAlpha(e.target.value, 'en-US', { ignore: " -" })) {
        notification.error({ text: notification.text.error });
        addStyleInputBorder("invalid", "valid")
    } else {
        countryContainerRef.innerHTML = ""
        addCounties(e.target.value);
        addStyleInputBorder("valid", "invalid")
    }
}

function addCounties(query) {
    fetchCountries(query).then(data => {
        if (data.length === 1) {
            notification.success({ text: notification.text.success })
            countryContainerRef.innerHTML = tempCountryMkp(data)
        }
        if (data.length > 1 && data.length <= 10) {
            notification.success({ text: notification.text.list })
            countryContainerRef.innerHTML = tempCountriesListMkp(data)
        }
        if (data.length > 10) {
            notification.alert({ text: notification.text.alert })
        }
    }).catch(error=> notification.alert({ text: notification.text.empty }))
}

function addStyleInputBorder(add, rem) {
    inputRef.classList.add(add)
    inputRef.classList.remove(rem)
}