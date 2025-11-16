/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { listExtensions } from '@google/gemini-cli-core';
export class ExtensionsCommand {
    name = 'extensions';
    description = 'Manage extensions.';
    subCommands = [new ListExtensionsCommand()];
    topLevel = true;
    async execute(config, _) {
        return new ListExtensionsCommand().execute(config, _);
    }
}
export class ListExtensionsCommand {
    name = 'extensions list';
    description = 'Lists all installed extensions.';
    async execute(config, _) {
        const extensions = listExtensions(config);
        const data = extensions.length ? extensions : 'No extensions installed.';
        return { name: this.name, data };
    }
}
//# sourceMappingURL=extensions.js.map