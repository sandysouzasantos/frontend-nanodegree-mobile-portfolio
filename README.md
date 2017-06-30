## Website Performance Optimization Portfolio Project

This repository is intended for the execution of the "Website Performance Optimization Portfolio" 
project proposed by Udacity as one of the steps to complete the Frontend Developer Nanodegree 
Program.

### Insructions

Execute the html files.

The index.html can be found at [https://sandysouzasantos.github.io/](https://sandysouzasantos.github.io/) 
to run it at [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=pt-BR).

### Goals

#### Optimize PageSpeed Insights score for index.html

In this case, I used gulp plugins to minify html, css, images and javascript files.

I used css inline and the the attribute media in the link tags too, to avoid rendering blocking css.

Finally, I used the async attribute in the script tag.

#### Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I reduced the amount of sliding pizzas when the page loads and I 
 changed the "upadatePositions" function to avoid the forced synchronous layout warning.
 
#### Optimize the pizza slider

I changed the "changePizzaSizes" function, so it iterates through pizza elements on the page 
and changes their widths according to the cases in the switch statement.

### Author
Sandy Souza Santos.