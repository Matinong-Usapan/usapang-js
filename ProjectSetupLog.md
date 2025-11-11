### Project Setup Log

1. Install Node (v24.11.0) including npm (v11.6.1) using the installer from the Node website
2. Go to / Create project repository and run <code>npm init</code> and provide repo details. (Make sure the package type is "module")
3. Manually update the monorepo **project.json** to remove the scripts (for now*), unspecify the main file, and configure the workspaces:

```json
{
  "name": "@usapang-js/root",
  "workspaces": [
    "./backend-app/",
    "./frontend-app/",
    "./common/lib/*"
  ]
}
```

4. Run <code>npm create vite@latest frontend-app</code>, and choose **React** > **Typescript** > **No** > **No**
5. Run <code>cd .\\frontend-app\\</code>, <code>npm i</code>

TODO