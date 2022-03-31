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
You can find out the weather info differently:
- Using an input
- Selecting out of last 3 requests
- Adding _/?city={YOUR_CITY}_
