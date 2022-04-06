
TODO -
- Fix 'not able to install extension', due to cors the VS CODE Unkpg service only allows vscode.dev,
    - try using ServiceWorker to intercep requests and sedn them to CORS proxy ?
- Customizable list of pre loaded extensions
- Make it into npm package

<meta id="vscode-workbench-web-configuration" data-settings="{.....}">


{
    "developmentOptions": {
        "extensions": [
            {
                "scheme": "http",
                "authority": "localhost:3000",
                "path": "/static/devextensions"
            }
        ]
    },
    "additionalBuiltinExtensions": [
        {
            "scheme": "http",
            "authority": "localhost:3000",
            "path": "/static/extensions/fs"
        }
    ],
    "folderUri": {
        "$mid": 1,
        "path": "/",
        "scheme": "vscode-test-web",
        "authority": "mount"
    }
}

declare module namespace {

    export interface Directory {
        path: string;
        type: string;
        contentType: string;
        integrity: string;
        lastModified: string;
        size: number;
    }

    export interface Directory {
        path: string;
        type: string;
        files: (File | Directory)[];
    }
}

function getMeta(packageName, version) {
    return fetch(`https://unpkg.com/${packageName}@${version}/?meta`).then(t => t.json())
}