# Full Stack Code Challenge

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