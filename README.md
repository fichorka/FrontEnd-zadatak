# Frontend zadatak

Example web app for a front end job application.

## Testing the app

1. Open Index.html in a web browser
2. Delete ./distr folder
3. Refresh index page
4. Build the app
5. Refresh the index page again

### Building the app:

Install devDependencies:

```
npm install
```

Build the app:

```
gulp build
```

## Reloading browser on change

For production, to make the browser auto reload on change

```
gulp serve
```
or just
```
gulp
```
since 'serve' is set as a default gulp task.

## Displaying Neat grid

To display a Neat grid uncomment first few lines relating to Neat's visual-grid variable in app/scss/main.scss file and then compile.

```
//$visual-grid-color: #bc6767 !global;
//$visual-grid: true !global;
//$visual-grid-index: 1 !global;
```

## Author

 **Filip**
 
 Contact me at filip.biterski@gmail.com or fichorka@gmail.com
