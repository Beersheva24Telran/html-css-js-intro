# Task definition

## Update UI infrastructure

### Introduce new UI Component - QueryFormComponent module

- Universal simple form <br>
- Constructor takes three parameters <br>
  1. Reference to a parent elements for rendering by using the method innerHTML <br>
  2. Submitter function that should be called at form submitting event with a submitted data object <br>
  3. Arry of the objects definig structure of a submitted data object <br>
     - each object defines one field of a submitted data object <br>
       3.1 Field name (for example: "year") <br>
       3.2 Field type (for example: "number") <br>
       3.3 Optional min value for the number type (for example: 1890) <br>
       3.4 Optional max value for the number type (for example: 2025) <br>
- The QueryFormComponent renders the form comprising of the &lt;input&gt; HTML elements based on the parameter (3) to the element from the parameter (1)
- The QueryFormComponent calls the submitter function with submitted data object once the "submit" event is emitted

### Updating index.html file

- introducing new &lt;section&gt; HTML element before &lt;main&gt; as the parent for a form rendered by the QueryFormComponent module
  - This section element will be used for navigating between "form" and main gallery elements
- introducing two buttons after the gallery items-thumbnails container: "previous" and "next"
  - "previous" for triggering getting previous data from a service
  - "next" for triggering getting next data from a service
- introducing button "query" before gallery items-thumbnails container
  - Triggering returning to the query form after showing initial portion of the thumbnails

### Updating "main.js" module

- controlling states of showing either the form or the gallery (consider new CSS class "none", having been added to any HTML element, hides the element from view port. **_.none {display: none}_** ) <br>
- maitaining a submitted data object from the form
- enabling / disabling / showing all the additional buttons (calling new service methods getFormStructureObject (see parameter #3 of constructing QueryFormComponent), hasNextData, hasPrevData)
- processing the following events:
  - submitting form from the QueryFormComponent (call the service method getData taking the submitted data object)
  - hitting button "next" (call the service method getNext)
  - hitting button "previous" (call the service method getPrev)

## Update the service interface

### getData(submittedObj) - returns the data of the known structure for GalleryComponent module

### getFormStructureObject() - returns the array of the objects described in the parameter #3 of the constructing QueryFormComponent class

### hasNext() - returns true if there are next data

### hasPrev() - returns true if there are previous data

### getNext() - returns next page of the required data

### getPrev() - return previous page of the required data

## Write service module MoviesApiService.js

### See API documentation from https://developer.themoviedb.org/docs/getting-started

- Consider query **_/discover_** with quering only **_primary_release_year_** (rest properties shouldn't be queried and may be hard coded in the query) https://developer.themoviedb.org/reference/discover-movie
- Get API key and consult the documentation how to apply **it https://developer.themoviedb.org/reference/intro/authentication**
- Write all the service methods
  - consider query parameter **page** in request
  - consider **total_pages** in a response
