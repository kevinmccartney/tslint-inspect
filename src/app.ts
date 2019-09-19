import { Command } from 'commander';
import { ConfigResolver } from './config-resolver';
import { FileLoader } from './file-loader';
import { chunk, map } from 'lodash';
import cliui from 'cliui';

const ui = new cliui();

console.log(ui.toString())
export class App {
  private program: any;

  constructor(
    private configResolver = new ConfigResolver(),
    private fileLoader = new FileLoader(),
  ) {
    this.program = new Command();

    this.registerCommands();

    this.program.parse(process.argv);
    
    this.handleArgs()
  }
  
  private registerCommands() {
    this.program
      .version('0.0.1')
      .option('-c, --config <path>', 'set config path. defaults to ./tslint.json', './tslint.json')
  }

  private async handleArgs() {
    try {
      const config = await this.configResolver.resolve(this.program.config);
      const loadedConfig = await this.fileLoader.load(config);

      let mappedRules = map(loadedConfig.rules, (value, key) => {
        return `${key}: ${JSON.stringify(value, null, 2)}`;
      });

      const chunkedRules = chunk(mappedRules, 3);

      

      for(let chunk of chunkedRules) {

        ui.span(
          {
            text: chunk[0] || '',
            border: true,
          },
          {
            text: chunk[1] || '',
            border: true,
          },
          {
            text: chunk[2] || '',
            border: true,
          }
        )
      }

      console.log(ui.toString())

      

    } catch(e) {
      console.log(e);
    }
  }
}