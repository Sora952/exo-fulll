for (var i = 1; i < 101; i++) {
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
}