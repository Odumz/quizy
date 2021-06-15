# Stocka-be-pjt-102
Backend for Stocka project

## Project Description
This is an an inventory digital solution that will take account of trader's sales and stocks, calculates their profits or losses over a specific period of time and offer suggestions to build profits.
Some of the wow features of Stocka will include a long term graphical analysis to predict future gains, goods scanner for ease 
at point of purchase, and daily profit and loss results.

Documentation Link
```sh
document link here
```

Design Link
```sh
lofi link here
hifi link here
```

## Folder Structure
1.  src  // folder containing all relevant source code
     -- controllers  // to handle our logic
     -- db  // for our database configuration
     -- routes  // for our endpoints
     -- models  // for our database and relationships
     -- services  // for some services
     -- utils  // for utilities
    test  // test folder
    views*  // for a simple templating language to generate HTML
    .env  // environment variables; for secret things
   
## Installation and Usage

1. Clone the repo
   ```sh
   git clone
   ```
   OR
   ```sh
   git pull origin main
   ```
2. Install NPM packages
   ```sh
   npm install || npm i
   ```
3. Once in the root folder, run
   ```sh
   npm run start
   ```

## Contribution guide
```sh
   - issues will be created based on features/components
   - issues will be assinged to teammates
   - devs should fork and clone the repo 
   - devs should create a branch out of branch development based on feature  / issues assigned to them e.g ft-nav_bar
   - devs should push to branch development and create a pull request when done
   - code should be hosted on gh pages or netlify 
   - hosted link should be added as a comment on issues
```

The postman collection can be imported at 

## Routes and Usage

The postman collection can be imported at 

### Environments
<p>Local URL: http://localhost:5002</p>
<p></p>Production URL: </p>

### Test Routes
```
 {URL}:
  get:
    summary: Test route to check connection
    responses:
      status: '200'
      message: 'Welcome to my crud application with mongodb.'
```

```
 {URL}/api/v1:
  get:
    summary: Test route to check connection
    responses:
      status: '200'
      message: 'Welcome to the my crud application with mongo db. This is the  service'
```

### Data Routes
Get all route

```
 {URL}/api/v1/stock:
  get:
    summary: Route for getting all records
    responses:
      status: '200'
      message: {
         message: {String: 'All stock successfully fetched'}
      }
```
  
Get one route
```
 {URL}/api/v1/stock/:id:
  get:
    summary: Route for getting a record by id
    responses:
      status: '200'
      message: {
         message: {String: 'Stock successfully fetched'}
      }
```

Create route
```
 {URL}/api/v1/add:
  post:
    summary: Route for creating new records
    responses:
      status: '200'
      message: {
         message: {String: 'Stock successfully added'}
      }
      body: {
         option: raw,
         payload: {
            
         }
      }
```

Edit route
```
 {URL}/api/v1/stock/edit/:id:
  put:
    summary: Route for editing a record
    responses:
      status: '200'
      message: {
         message: {String: 'Stock item updated successfully'}
      }
      body: {
         option: raw,
         payload: {

         }
      }
```

Delete route
```
 {URL}/api/v1/delete/:id:
  delete:
    summary: Route for getting all records
    responses:
      status: '200'
      message: {
         message: {String: 'Stock item deleted successfully'},
         image: {String: 'item no longer exists'}
      }
```