# Full Stack Code Challenge


## Prerequisites

Software:

- Visual Studio .NET / Visual Studio Code, Node.js 14.15, SQL Server (with Management Studio 18).


## Introduction


The demo emulates a page to migrate property records from a remote API to a database in SQL Server. The user choose which record to import, it will reflect graphically in the UI.

This code challenge has two parts:


## 1-  /PropertyProjectAPI

ASP.NET Core  with Net. 5 which contains the REST API based withe Entity Framework (Code First) to INSERT/UPDATE/GETOne/GetALL records of the table [dbo].[Properties]
API Address: 

http://localhost:52565/api/PropertyDetail.

## Installation

After cloning/downloading and compiling the solution: PropertyProjectAPI.sln

You can edit the DB connection in \PropertyProjectAPI\PropertyProjectAPI\appsettings.json:

Connection String: 
```bash
"DevConnection": "Server=localhost;Database=PropertyDetailDB;Trusted_Connection=True;MultipleActiveResultSets=true"
```

Executute the migration files to create the database PropertyDetailDB and table [dbo].[Properties] in SQL Server:

```bash
Package Manager Console
PM> Update-Database
```

Run the project and it will show a Swagger page in:


http://localhost:52565/api/PropertyDetail
 

## 2-  /PropertyApp

Web Application based on Angular version 11.2.10

## App Structure

```bash
● src
+---● app
|   +--● property-details 
|   |  |--property-details.component.ts|.html -> Main form that contains all the components
|   |  |
|   |  +--● property-old-form -> Component and HTML that consume the remote API and list it in a table
|   |     |--property-old-form.component.ts|.html
|   |  +--● property-detail-form -> Component and HTML to List and Edit the Migrated Properties in SQL Server
|   |     |--property-detail-form.component.ts|.html
|   |
|   +--● shared -> Services and Models
|   |  |--property-old-detail.model.ts -> Model that represents the json structure of the Remote API
|   |  |--property-detail.model.ts -> Model that represents the new table in SQL Server
|   |  |--property-detail.service.ts -> Retrieve information from the Remote API and executes POST, GET, DELETE, PUT of the API to record properties in SQL Server
|   |
|   |--app.module.ts
|
|--index.html (cdn path for bootstrap & fa icons)
```


## Installation

After cloning/dowloading the repo you need to install the node modules with:

```bash
npm i
```

Build the project with:

```bash
ng build
```

Run the web application with:

```bash
ng serve --o
```

It will be launched in the URL:

http://localhost:4200/


## Usage

The page will show a table with the properties list from https://samplerspubcontent.blob.core.windows.net/public/properties.json

each row has a button at the end to "import"  the record   and save it in the SQL Database.

Bellow that there is a table that reflects the already migrated records stored in the SQL database. If we select one of these records it is possible to update or delete it and import it again.

Also it is possible to add new properties to SQL database with the form bellow the table. As it is shown in the image:

![Remote and Migrated Tables](screenshots/form1.png?raw=true "Remote and Migrated Tables")

![Form to Add/Edit migrated properties](screenshots/form2.png?raw=true "Form to Add/Edit migrated properties")

## Contributing
Pull requests are welcome. Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)