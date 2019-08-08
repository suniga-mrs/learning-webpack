import 'babel-polyfill';
import people from './people';
import $ from 'jquery';

$(document).ready(function() {

    $('<h1>People</h1>').appendTo('body');

    const ul = $('<u></ul>').appendTo('body');

    for (const person of people) {
        $('<li></li>').text(person).appendTo(ul);
    }

})
