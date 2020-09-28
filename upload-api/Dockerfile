FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

COPY *.sln .
COPY upload-api/upload-api.csproj upload-api/
COPY upload-core/upload-core.csproj upload-core/
COPY upload-tests/upload-tests.csproj upload-tests/

RUN dotnet restore

COPY upload-api/. ./upload-api/
COPY upload-core/. ./upload-core/
COPY upload-tests/. ./upload-tests/

WORKDIR /app/upload-api
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 as runtime
WORKDIR /app

COPY --from=build /app/upload-api/out ./
ENTRYPOINT ["dotnet", "upload-api.dll"]