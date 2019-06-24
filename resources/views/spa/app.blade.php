<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <title>Laravel SPA</title>
        
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet"/>
        <link href="{{ asset('css/app.css') }}?nocache={{ str_random(15) }}" rel="stylesheet"/>
    </head>
    <body>
        <div id="app">
            
        </div>
        <script src="{{ asset('js/app.js') }}?nocache={{ str_random(15) }}"></script>
    </body>
</html>