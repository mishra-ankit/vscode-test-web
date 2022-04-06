- Stripped out version of VS Code Test to allow self hosting

- Install dependencies - `yarn`
- Build code and download VS Code Standalone - `yarn build`

- And then you can run static server in the root of 'vsode-web-stable'
  - `serve --cors`

TODO -
- Fix 'not able to install extension', due to cors the VS CODE Unkpg service only allows vscode.dev,
    - try using ServiceWorker to intercep requests and sedn them to CORS proxy ?
- Customizable list of pre loaded extensions
- Make it into npm package

<meta id="vscode-workbench-web-configuration" data-settings="{&quot;developmentOptions&quot;:{&quot;extensions&quot;:[{&quot;scheme&quot;:&quot;http&quot;,&quot;authority&quot;:&quot;localhost:3000&quot;,&quot;path&quot;:&quot;/static/devextensions&quot;}]},&quot;additionalBuiltinExtensions&quot;:[{&quot;scheme&quot;:&quot;http&quot;,&quot;authority&quot;:&quot;localhost:3000&quot;,&quot;path&quot;:&quot;/static/extensions/fs&quot;}],&quot;folderUri&quot;:{&quot;$mid&quot;:1,&quot;path&quot;:&quot;/&quot;,&quot;scheme&quot;:&quot;vscode-test-web&quot;,&quot;authority&quot;:&quot;mount&quot;}}">


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