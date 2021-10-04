# outerbounds_brendan

Outer Bounds homework for Brendan Gibson

![image](https://user-images.githubusercontent.com/1231492/135876554-917bc77b-6b37-4703-8493-f09155f4ecc0.png)

### To run

* Follow this [http://doordropping.com/outerbounds_brendan/](http://doordropping.com/outerbounds_brendan/)

### To run locally

* `git clone `
* `cd outerbounds_brendan`
* `npm install`
* `npm start`

### To run with another data source

Append a `time_data_url` parameter with the URL of the new JSON data file like
http://doordropping.com/outerbounds_brendan/?time_data_url=http://doordropping.com/outerbounds_brendan/another.json

## The code

The code was started using the Create React App framework so that starting the implementation would be quick.

It uses `styled-components` for CSS styling.

The code is written in typescript, and has eslint rules, and prettier for code formatting.

![image](https://user-images.githubusercontent.com/1231492/135879417-e27a2338-83fb-4e4f-9609-866c62eda07d.png)

The diagram above shows the structure of the code with components in boxes. `time_data_url` is a URL parameter that has the name of the JSON file. `useReadData` reads in the data from that JSON file.

## TODO and Discussion

There are a number of TODO comments throughout the code listing the things that would need to be done to make this implementation more professional.

Additionally - 
* Improve linting rules
* Add the vertical lines in the chart
* Write more unit tests and add integration tests
* Improve the deploy pipeline
* Use d3 for some of the calculations for scale and color

## Diary

### Saturday 2 October

*Early morning* - received [requirements](
https://docs.google.com/document/d/1ZeWuUxb8I3POXdxqfMXgV0IKNTlkRVdQ_PJca0Errjg/edit#)

*9am* - lookup documentation for d3 color to see if it will work for assigning bar chart colors.

*rest of day* - thinking

### Sunday 3 October

*8pm* - Create git repository and create the baseline app with Create React App

*9pm* - Setup http://doordropping.com/outerbounds_brendan

### Monday 4 October

*7am* - Write code for Bar

*7:30am* - Write data fetching code

*8:30am* - Finish wiring up chart and data

*9am* - Get code working on external site and write docs

*9:30am* - Submitted

