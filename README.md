# File Metadata Microservice

API that returns some information about the uploaded file, like name, mimetype, and size in bytes.

**Example:**

When using *POST '/api/fileanalyse'*, while providing a form-data file (through software like Postman, or with the form provided on the index page),
a response like the following will be returned:
```
{
    "name": "libreWriterFile.odt",
    "type": "application/vnd.oasis.opendocument.text",
    "size": 8345
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have ***git***, ***yarn*** and ***nodejs*** installed on your computer.

You have the *config/config.json* file, where you can set up the port that
***express*** will use for different environments (development and test).

### Installation steps

```
> git clone git@github.com:narcisneacsu194/file-metadata-microservice.git
> cd {your_local_path}/file-metadata-microservice
> yarn install
> node server.js
```

You can then access the application with any browser or with software like Postman, using the following URL:

```
localhost:3000
```
