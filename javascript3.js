const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']]; 
theList.shift();
theList.unshift('FIRST');
theList.splice (2,8,);
theList.push('MIDDLE');
theList.push('hello world');
theList.push('LAST');
theList.slice(0,2);
console.log(theList);
