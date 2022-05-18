<h1 align="center">Weather checker🌡</h1>
<p><a href="https://github.com/GreenDevald1523/my-app/">Try demo</a></p>

<h2>Decription</h2>
You can use it in order to check out the weather statistics in each city/country of the world.
<img height="350px" src="https://vk.com/doc192935276_632581953?hash=6efa13ff0cd86cba35&dl=12ed647c85a5541e55&wnd=1&module=im">

<h2>Installation/Getting started</h2>

```shell
npx create-react-app my-app # creats your react app with all the required basic files
cd my-app
npm start # starts your react project
```

Now your project is launched in your browser!
<h2>Initial Configuration</h2>
One of the most essential parts is <a href="https://openweathermap.org/current">Weather API</a>. You need to login your email and find your personal API key. Then put it in this link: 

```shell
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

<h2>Developing</h2>
After adding all the files and folders, you will have to publish your project on GitHub in your repository. Firstly, open _package.json_ and add new code strings:

```shell
"homepage": "https://{USERNAME}.github.io/my-app/"
```
In order to publish, use:

```shell
npm install --save gh-pages / yarn add gh-pages
```
Add to _package.json_:
```shell
...
"scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  },
```
<h2>Building</h2>
Next, you need to build your project:

```shell
npm run build
```
Wait untill you see this result:

```shell 
The build folder is ready to be deployed.
```

<h2>Deploy</h2>
Now, it's time to publish!

```shell
npm run deploy
```

You did everything correct if you see the pproject published:

```shell
> my-app@0.1.0 deploy
> gh-pages -d build
Published
```
<h2>How to use?</h2>
You can find out the weather info differently: <br>
1. Using an input: <br>
<img src="https://sun9-60.userapi.com/impf/Z3UxLyg7gzSjqmY5u82GPaGZ78UfQV78nJ_wHA/Ale0ZbeYGgg.jpg?size=289x62&quality=96&sign=b0eae1081062972ff34cc2a8b90ff649&type=album" />
2. Selecting out of last 3 requests: <br>
<img src="https://sun9-73.userapi.com/impf/ifBXhyWo4aFew9EIDElqVRQetLii814iOACyRQ/OrdFQaxUJTc.jpg?size=202x140&quality=96&sign=3bcd143891374ba700c8764221327317&type=album" />
3. Adding /?city={YOUR_CITY} to url: <br>
<img src="https://sun9-81.userapi.com/impf/qYEEw-r1aS3NNvxfXExQ-rzY7o8M8TUj35Qdpg/QUadpIPGzV8.jpg?size=1212x45&quality=96&sign=0edce3d3a303677b819499176cb122dc&type=album" />
<h3>Example of a result</h3>
<img src="https://sun9-11.userapi.com/impf/UOZD19KPEwuEI30Ih0IcCvssJYDFwsKJx7yCeQ/TXmD5euB0tc.jpg?size=426x287&quality=96&sign=9a31e04e3dc42a0fd5e096d027950498&type=album" />
<h2>Links</h2>
Other projects <br>
    * <a href="https://github.com/GreenDevald1523/API-Dota-2/tree/master">API Dota 2</a> <br>
    * <a href="https://github.com/GreenDevald1523/Mendeleev-s-Table">Mendeveel Table</a>
