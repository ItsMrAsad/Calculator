window.onload = function() {
    var memory = 0;
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            switch(this.value) {
                case '=':
                    try {
                        display.value = new Function('return ' + display.value)();
                    } catch(e) {
                        display.value = 'Error';
                    }
                    break;
                case 'AC':
                    display.value = '';
                    break;
                case 'DE':
                    display.value = display.value.slice(0, -1);
                    break;
                case 'M+':
                    memory += parseFloat(display.value) || 0;
                    break;
                case 'MR':
                    display.value = memory.toString();
                    break;
                case 'sin':
                case 'cos':
                case 'tan':
                    try {
                        display.value = Math[this.value](parseFloat(display.value) * Math.PI / 180).toString();
                    } catch (e) {
                        display.value = 'Error';
                    }
                    break;
                case 'log':
                case 'ln':
                    try {
                        if (parseFloat(display.value) > 0) {
                            display.value = this.value === 'log' ? Math.log10(parseFloat(display.value)).toString() :
                                Math.log(parseFloat(display.value)).toString();
                        } else {
                            display.value = 'Error';
                        }
                    } catch (e) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += this.value;
            }
        });
    });
}
