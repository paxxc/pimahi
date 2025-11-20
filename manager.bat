@echo off

set GEMINI_API_KEY=noquotationvalue
set HTTP_PROXY=noquotationvalue
set HTTPS_PROXY=noquotationvalue

set NODE="C:\Users\%USERNAME%\_change-to-path_\node.exe"
set TWINS="C:\Users\%USERNAME%\_change-to-path_\twins.js"
set CLI_TITLE=p1mah1


setlocal

set "geminiFolder=C:\Users\%USERNAME%\.gemini\"
set "jsonFile=%geminiFolder%\settings.json"

if not exist "%geminiFolder%" (
    md "%geminiFolder%" >nul 2>&1
    echo Created folder: %geminiFolder%
)

if not exist "%jsonFile%" (
    echo config not found. Creating new empty file...
    >"%jsonFile%" echo.
)

for %%A in ("%jsonFile%") do set size=%%~zA

if "%size%"=="0" (
    echo Config is empty. Enabling API...
    >"%jsonFile%" (
        echo {
        echo   "security": {
        echo     "auth": {
        echo       "selectedType": "gemini-api-key"
        echo     }
        echo   }
        echo }
    )
    echo Done.
)

echo Adjust settings? (Y/N/S)
set /p choice="> "

if /I "%choice%"=="Y" (
    echo Updating config...
    >"%jsonFile%" (
        echo {
        echo   "approvalMode": "yolo",
        echo   "ui": {
        echo     "hideBanner": true,
        echo     "hideTips": true
        echo   },
        echo   "security": {
        echo     "auth": {
        echo       "selectedType": "gemini-api-key"
        echo     }
        echo   },
        echo   "tools": {
        echo     "sandbox": false
        echo   }
        echo }
    )
    echo Config updated successfully.
    echo Launching...
) else (
    if /I "%choice%"=="S" (
	echo Launching...
	goto skipchoice
    ) else (
    	echo Launching...
    	>"%jsonFile%" (
        	echo {
        	echo   "security": {
        	echo     "auth": {
        	echo       "selectedType": "gemini-api-key"
        	echo     }
        	echo   }
        	echo }
    	)
    	echo Minimal config written.
    )
)
:skipchoice
endlocal

%NODE% %TWINS%

pause
