const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
  .option('componentName',
    {
      alias: 'name',
      describe: 'write component name',
      string: true,
      demandOption: true
    }
  )
  .option('componentType',
    {
      alias: 'type',
      describe: 'choose component type',
      choices: ['functional', 'class', 'high-order'],
      demandOption: true
    })
  .option('filePath',
    {
      alias: 'path',
      describe: 'component path'
    }
  )
  .demandOption(['componentName', 'componentType'], 'Please enter component name and type')
  .command({
    command: 'createComponent <componentName> <componentType> [filePath] [fileName]',
    aliases: 'create',
    describe: 'create new react component considering component type',
    handler: (argv) => {

      let componentName = argv.componentName;
      componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      let componentType = argv.componentType;
      let fileContents =
        `import React from 'react'\n\n`;

      switch (componentType) {
        case 'functional':
          fileContents +=
            `function ${componentName}()
          {
              return <div></div>;
          }`;
          break;
        case 'class':
          fileContents +=
            `class ${componentName} extends React.Component
          {
              render(){
                    return <div></div>;
              }
          }`;
          break;
        case 'high-order':
          fileContents +=
            `const hoc = (${componentName}) => (props) => {
            return (
              <div>
                <${componentName} {...props}>
                </${componentName}>
              </div>
            )
          }`;
          break;
      };

      fileContents +=
        `\n\nexport default ${componentName}\n`;

      const fileName = argv.fileName || componentName;

      let filePath = argv.filePath || '';
      filePath = path.join(__dirname, `${filePath}/${fileName}.js`);

      fs.writeFile(filePath, fileContents)
        .then(() => console.log(`Your component ${componentName} has been created successfully`))
        .catch((e) => console.error(`An error has been occured: `, e));
    }
  })
  .argv;
