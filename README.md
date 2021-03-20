# Util-Funcs - is a simple package with functions that can be useful to you!

#### I will be adding functions that are useful to us for faster development constantly!

---

> Instalation:

```
$ npm install util-funcs

$ yarn add util-funcs
```

---

> Statements:

```javascript
const utils = require("util-funcs");
```

---

> Added Method(0.0.7):

- [.stringFind(string, character)](#string-find)

---
> Docs:

### Strings, Numbers and Arrays manipulators/converters Methods:

- [.randomString(length, type, caseInsensitive, capsLock)](#random-string)
- [.randomNumber(min, max, float)](#random-number)
- [.toArray(string)](#to-array)
- [.stringFind(string, character)](#string-find)

---
### Milisecond Converter Methods:

- [.secondInMs(value)](#second-in-ms)
- [.minuteInMs(value)](#minute-in-ms)
- [.hourInMs(value)](#hour-in-ms)
- [.dayInMs(value)](#day-in-ms)
- [.weekInMs(value)](#week-in-ms)
- [.monthInMs(value, optional:monthDays)](#month-in-ms)
- [.yearInMs(value)](#year-in-ms)
- [.time(value, configs)](#time)

---

## Methods Help:

> Strings, Numbers and Arrays manipulators/converters Methods:

<h3 id="random-string" style="color:red;font-weight: bold;">[utils].randomString(length, type, caseInsensitive, capsLock)</h3>

```javascript
/*
All parameters are optional.
The default value for the {length} parameter is 10, the {type} parameter is 0, the {caseInsensitive} parameter is false, and the {capsLock} parameter is also false.
*/

utils.randomString();
//---> EXAMPLE RETURN: 'gtrulhgpcy'

utils.randomString(15);
//---> EXAMPLE RETURN: 'ygrabmdmxqancya'


/*
Define the type of string that will be returned by setting the parameter {type}.
*/

utils.randomString(15, 1);
//---> EXAMPLE RETURN: '488585235480207'

utils.randomString(15, 2);
//---> EXAMPLE RETURN: '77vygfta7znl9c3'

utils.randomString(15, 3);
//---> EXAMPLE RETURN: '@&9f5iu3,l$´h4w'

/*
Here is a list with the valid values ​​of the parameter {type}:
0 = Only Letters
1 = Only Numbers
2 = Alpha-Numeric
3 = Alpha-Numeric with special characters
*/


/*
If you want the string to contain uppercase and lowercase letters, set the parameter {caseInsensitive} to true, otherwise, set to false.
*/

utils.randomString(15, 2, true);
//---> EXAMPLE RETURN: '0MPhVKj4161umyI'

utils.randomString(15, 2, false);
//---> EXAMPLE RETURN: 'giejlqirg0c07j4'


/*
If you want all letters to be capital letters only, set the parameter {capsLock} to true, otherwise, set to false.
*/


utils.randomString(15, 2, false, true);
//---> EXAMPLE RETURN: '3GOXHUOGF891HMI'

utils.randomString(15, 2, false, false);
//---> EXAMPLE RETURN: 'ago347ca7oq9inf'

```

<h3 id="random-number" style="color:red;font-weight: bold;">[utils].randomNumber(min, max, float)</h3>

```javascript

// With this function, you can return a random value with minimum and maximum.

utils.randomNumber(5, 20);
//---> EXAMPLE RETURN: 15.045860685796184

// If you do not want to return float numbers, set the parameter {float} to false.

utils.randomNumber(5, 20, false);
//---> EXAMPLE RETURN: 13

utils.randomNumber(5, 20, true);
//---> EXAMPLE RETURN: 19.529826353635208

```

<h3 id="to-array" style="color:red;font-weight: bold;">[utils].toArray(string)</h3>

```javascript

// This function transforms a string into an array. It removes: Spaces, periods (.) and commas (,).

utils.toArray('hi');
//---> { content: [ 'hi' ], length: 1 }

utils.toArray('I am a frog, ribbet!');
//---> { content: [ 'I', 'am', 'a', 'frog', 'ribbet!' ], length: 5 }

```

<h3 id='string-find' style='color:red;font-weight:bold;'>[utils].stringFind(string, character)</h3>

```javascript

// You can check if there are any characters in the string, see the examples:

utils.stringFind('hi', 'i');
//---> true

utils.stringFind('hi', 'hi')
//---> true

// This method uses Regular Expressions to find and check if the character exists, so if you try to search: 'ih', in 'hi', it will return false.

utils.stringFind('hi', 'ih')
//---> false

// However, if you try to check 'ih' in 'giht', it will return true.
utils.stringFind('Wait... what is "giht?"', 'ih')
//---> true
```

<br>
<br>

> Milisecond Converter Methods:

<h3 id="second-in-ms" style="color:red;font-weight: bold;">[utils].secondInMs(value)</h3>

```javascript
utils.secondInMs(1);
//---> 1000
```

<h3 id="minute-in-ms" style="color:red;font-weight: bold;">[utils].minuteInMs(value)</h3>

```javascript
utils.minuteInMs(1);
//---> 60000
```

<h3 id="hour-in-ms" style="color:red;font-weight: bold;">[utils].hourInMs(value)</h3>

```javascript
utils.hourInMs(1)
//---> 3600000
```

<h3 id="day-in-ms" style="color:red;font-weight: bold;">[utils].dayInMs(value)</h3>

```javascript
utils.dayInMs(1)
//---> 86400000
```

<h3 id="week-in-ms" style="color:red;font-weight: bold;">[utils].weekInMs(value)</h3>

```javascript
utils.weekInMs(1)
//---> 604800000
```

<h3 id="month-in-ms" style="color:red;font-weight: bold;">[utils].monthInMs(value)</h3>

```javascript
utils.monthInMs(1)
//---> 2592000000

//Do you can put the month days(30, or 31).
utils.monthInMs(1, 30)
//---> 2592000000
utils.monthInMs(1, 31)
//---> 2678400000
```

<h3 id="year-in-ms" style="color:red;font-weight: bold;">[utils].yearInMs(value)</h3>

```javascript
utils.yearInMs(1)
//---> 31536000000
```

<h3 id="time" style="color:red;font-weight: bold;">[utils].time(value, configs)</h3>

```javascript
// The {configs} paramether is optional, if do you not use, he is set to 'all'.

utils.time(31536000000)
//---> 1 years, 12 months, 52 weeks, 365 days, 8760 hours, 525600 minutes, 31536000 seconds

// You can use pre-set keys to filter years, months, weeks, days, hours, minutes and seconds!
// Examples:

utils.time(31536000000, 'days')
//---> 365 days

utils.time(31536000000, 'years')
//---> 1 years

// The existing pre-set keys are: 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years' and 'all'.
```