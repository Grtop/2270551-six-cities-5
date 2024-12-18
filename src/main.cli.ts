import { CLIApplication } from "./cli/cli-application";
import { HelpCommand } from "./cli/commands/help.command";
import { VersionCommand } from "./cli/commands/version.command";



function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand()
  ]);
  cliApplication.processCommand(process.argv);
}

bootstrap();
