import { readFile } from 'fs';

export class FileLoader {

  public load(config: string): Promise<{
    [key: string]: any,
  }> {
    if (config.includes('.js')) {
      const configObj: any = require(config);

      return new Promise((resolve) => resolve(configObj));
    }

    return new Promise((resolve, reject) => {
      readFile(
        config,
        (err, response) => {
          response ? resolve(JSON.parse(response.toString())) : reject(err);
        }
      );
    });
  }
}