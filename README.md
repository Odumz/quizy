# Quizy-API
Backend for Quizy project

## Project Description
This is an application that allows you take tests and get your results and corrections to wrong answers given

   <!-- Design Link
   * [Lo-fi link](https://www.figma.com/file/aD1DdXvw6wavwHjo5MNN9m/STOCKA?node-id=0%3A1)
   * [Hi-fi link](https://www.figma.com/file/aD1DdXvw6wavwHjo5MNN9m/STOCKA?node-id=8%3A0)
   * [User-flow and prototype link](https://www.figma.com/proto/aD1DdXvw6wavwHjo5MNN9m/STOCKA?node-id=1349%3A355&scaling=scale-down&page-id=535%3A0) -->


   Frontend development link
   * [Quizy frontend](#)


   Backend development link
   * [Quizy API](#)
   * [Quizy API - Demo](#)
   * [Quizy API - Documentation](#)
   * [Quizy API - Postman docs](https://www.getpostman.com/collections/a098f86dc809344794a7)



## Folder Structure

The folder is structured like below

```sh
   src  // folder containing all relevant code
     -- controllers  // to handle business logic
     -- db  // to handle database configuration
     -- middleware // to handle middlewares
     -- routes  // to handle endpoints
     -- models  // to handle database and relationships
     -- services  // to handle some services
     -- utils  // to handle utilities
    test  // tests folder
    views*  // to handle a simple templating language to generate HTML
    .env  // environment variables; to handle secret credentials
```
   
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

<!-- ## Contribution guide
   * [Contribution Guide](https://docs.google.com/document/d/1OTOpJ52unFRNgOP9uw-EZO7uZayeLFbditGahLxvD4c/edit?usp=sharing)

```sh
   - issues will be created based on features/components
   - issues will be assigned to teammates
   - devs should fork and clone the repo 
   - devs should create a branch out of branch develop based on feature
      issues assigned to them e.g ft-nav_bar
   - devs should push to branch develop and create a pull request when done
   - code should be hosted on heroku
   - hosted link should be added as a comment on issues
``` -->

## Routes and Usage
### Environments
<p>Local URL: http://localhost:5003</p>
<p></p>Production URL: </p>

<!-- ### Test Routes
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
 {URL}/api/v1/stocks:
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
``` -->