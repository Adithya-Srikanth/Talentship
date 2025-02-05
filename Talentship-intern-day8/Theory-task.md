# 1:Callback Hell

callback hell refers to the situation where multiple callback functions are nested together creating code that is difficult to read,maintain and debug.

eg:

```
fetchRandomJoke((joke) => {
console.log(joke);

    translateJoke(joke, (translatedJoke) => {
        console.log(translatedJoke);

        postJoke(translatedJoke, () => {
            console.log("Joke posted successfully!");
        });
    });

});

```

we can resolve callback hell either using ` Promise().then.` catch syntax or using `async-await` syntax.

eg: using ` Promise().then.` :

```
fetchRandomJoke()
    .then((joke) => {
        console.log(joke);
        return translateJoke(joke);
    })
    .then((translatedJoke) => {
        console.log(translatedJoke);
        return postJoke(translatedJoke);
    })
    .then(() => {
        console.log("Joke posted successfully!");
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    });

```

eg: using `async-await`:

```
async function tellJoke(){
try{
  const joke=await fetchRandomJoke();
  const translatedJoke= translateJoke(joke);
  await postJoke(translatedJoke);
  console.log("Joke posted successfully!");

}catch(error){
console.log(error)
}



}
```

# 2:Promise Methods:

## a:Promise.all

The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

## b:Promise.allSettled()

The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

## c:Promise.any()

The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

## d:Promise.race()

The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

## e:Promise.reject() and Promise.resolve()

resolves/rejects a given single Promise(). Resolves are .thenable and rejects are .catchable. Both resolve and reject have an associated callback.
