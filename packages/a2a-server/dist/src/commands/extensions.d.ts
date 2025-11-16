/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type Config } from '@google/gemini-cli-core';
import type { Command, CommandExecutionResponse } from './types.js';
export declare class ExtensionsCommand implements Command {
    readonly name = "extensions";
    readonly description = "Manage extensions.";
    readonly subCommands: ListExtensionsCommand[];
    readonly topLevel = true;
    execute(config: Config, _: string[]): Promise<CommandExecutionResponse>;
}
export declare class ListExtensionsCommand implements Command {
    readonly name = "extensions list";
    readonly description = "Lists all installed extensions.";
    execute(config: Config, _: string[]): Promise<CommandExecutionResponse>;
}
