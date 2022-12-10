import CONSTANTS from "./constants";
import { dialogWarning, error, i18n, info, warn } from "./lib/lib";
import type { LightHUDElement, VisionHUDElement } from "./lights-hud-ate-models";
import type Effect from "./effects/effect";

const API = {
	// effectInterface: EffectInterface,

	/**
	 * The attributes used to track dynamic attributes in this system
	 *
	 * @returns {array}
	 */
	get LIGHTS(): LightHUDElement[] {
		return <any[]>game.settings.get(CONSTANTS.MODULE_NAME, "lights");
	},

	/**
	 * The attributes used to track dynamic attributes in this system
	 *
	 * @returns {array}
	 */
	get VISIONS(): VisionHUDElement[] {
		return <any[]>game.settings.get(CONSTANTS.MODULE_NAME, "visions");
	},

	/**
	 * Sets the attributes used to track dynamic attributes in this system
	 *
	 * @param {array} inAttributes
	 * @returns {Promise}
	 */
	async setLights(inAttributes) {
		if (!Array.isArray(inAttributes)) {
			throw error("setLights | inAttributes must be of type array");
		}
		inAttributes.forEach((attribute) => {
			if (typeof attribute !== "object") {
				throw error("setLights | each entry in the inAttributes array must be of type object");
			}
			if (typeof attribute.name !== "string") {
				throw error("setLights | attribute.name must be of type string");
			}
			if (typeof attribute.attribute !== "string") {
				throw error("setLights | attribute.path must be of type string");
			}
			if (attribute.img && typeof attribute.img !== "string") {
				throw error("setLights | attribute.img must be of type string");
			}
		});
		return game.settings.set(CONSTANTS.MODULE_NAME, "lights", inAttributes);
	},

	/**
	 * Sets the attributes used to track dynamic attributes in this system
	 *
	 * @param {array} inAttributes
	 * @returns {Promise}
	 */
	async setVisions(inAttributes) {
		if (!Array.isArray(inAttributes)) {
			throw error("setVisions | inAttributes must be of type array");
		}
		inAttributes.forEach((attribute) => {
			if (typeof attribute !== "object") {
				throw error("setVisions | each entry in the inAttributes array must be of type object");
			}
			if (typeof attribute.name !== "string") {
				throw error("setVisions | attribute.name must be of type string");
			}
			if (typeof attribute.attribute !== "string") {
				throw error("setVisions | attribute.path must be of type string");
			}
			if (attribute.img && typeof attribute.img !== "string") {
				throw error("setVisions | attribute.img must be of type string");
			}
		});
		return game.settings.set(CONSTANTS.MODULE_NAME, "visions", inAttributes);
	},

	// ======================
	// Effect Management
	// ======================

	// async removeEffectArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectArr | inAttributes must be of type array');
	//   }
	//   const [params] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectArr(params);
	//   return result;
	// },

	// async toggleEffectArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('toggleEffectArr | inAttributes must be of type array');
	//   }
	//   const [effectName, params] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface).toggleEffect(effectName, params);
	//   return result;
	// },

	// async addEffectArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addEffectArr | inAttributes must be of type array');
	//   }
	//   const [params] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.addEffectArr(params);
	//   return result;
	// },

	// async hasEffectAppliedArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('hasEffectAppliedArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.hasEffectApplied(effectName, uuid);
	//   return result;
	// },

	// async hasEffectAppliedOnActorArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('hasEffectAppliedOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, includeDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.hasEffectAppliedOnActor(
	//     effectName,
	//     uuid,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async hasEffectAppliedFromIdOnActorArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('hasEffectAppliedFromIdOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, includeDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.hasEffectAppliedFromIdOnActor(
	//     effectId,
	//     uuid,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async addEffectOnActorArr(...inAttributes) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addEffectOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, origin, overlay, effect] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.addEffectOnActor(
	//     effectName,
	//     uuid,
	//     origin,
	//     overlay,
	//     effect,
	//   );
	//   return result;
	// },

	// async removeEffectOnActorArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectOnActor(effectName, uuid);
	//   return result;
	// },

	// async removeEffectFromIdOnActorArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectFromIdOnActor | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectFromIdOnActor(
	//     effectId,
	//     uuid,
	//   );
	//   return result;
	// },

	// async toggleEffectFromIdOnActorArr(...inAttributes) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addEffectOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, alwaysDelete, forceEnabled, forceDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.toggleEffectFromIdOnActor(
	//     effectId,
	//     uuid,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//   );
	//   return result;
	// },

	// async findEffectByNameOnActorArr(...inAttributes: any[]): Promise<ActiveEffect | null> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('findEffectByNameOnActorArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.findEffectByNameOnActor(
	//     effectName,
	//     uuid,
	//   );
	//   return result;
	// },

	// async hasEffectAppliedOnTokenArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('hasEffectAppliedOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, includeDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.hasEffectAppliedOnToken(
	//     effectName,
	//     uuid,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async hasEffectAppliedFromIdOnTokenArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('hasEffectAppliedFromIdOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, includeDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.hasEffectAppliedFromIdOnToken(
	//     effectId,
	//     uuid,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async addEffectOnTokenArr(...inAttributes) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addEffectOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, origin, overlay, effect] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.addEffectOnToken(
	//     effectName,
	//     uuid,
	//     origin,
	//     overlay,
	//     effect,
	//   );
	//   return result;
	// },

	// async removeEffectOnTokenArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectOnToken(effectName, uuid);
	//   return result;
	// },

	// async removeEffectFromIdOnTokenArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectFromIdOnToken | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectFromIdOnToken(
	//     effectId,
	//     uuid,
	//   );
	//   return result;
	// },

	// async removeEffectFromIdOnTokenMultipleArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('removeEffectFromIdOnTokenMultipleArr | inAttributes must be of type array');
	//   }
	//   const [effectIds, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.removeEffectFromIdOnTokenMultiple(
	//     effectIds,
	//     uuid,
	//   );
	//   return result;
	// },

	// async toggleEffectFromIdOnTokenArr(...inAttributes) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addEffectOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, alwaysDelete, forceEnabled, forceDisabled] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.toggleEffectFromIdOnToken(
	//     effectId,
	//     uuid,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//   );
	//   return result;
	// },

	// async findEffectByNameOnTokenArr(...inAttributes: any[]): Promise<ActiveEffect | null> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('findEffectByNameOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.findEffectByNameOnToken(
	//     effectName,
	//     uuid,
	//   );
	//   return result;
	// },

	// async addActiveEffectOnTokenArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addActiveEffectOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [tokenId, activeEffectData] = inAttributes;
	//   const result = (<EffectInterface>this.effectInterface)._effectHandler.addActiveEffectOnToken(
	//     <string>tokenId,
	//     activeEffectData,
	//   );
	//   return result;
	// },

	// async updateEffectFromIdOnTokenArr(...inAttributes: any[]): Promise<boolean | undefined> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('updateEffectFromIdOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, origin, overlay, effectUpdated] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.updateEffectFromIdOnToken(
	//     effectId,
	//     uuid,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateEffectFromNameOnTokenArr(...inAttributes: any[]): Promise<boolean | undefined> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('updateEffectFromNameOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, origin, overlay, effectUpdated] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.updateEffectFromNameOnToken(
	//     effectName,
	//     uuid,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateActiveEffectFromIdOnTokenArr(...inAttributes: any[]): Promise<boolean | undefined> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('updateActiveEffectFromIdOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectId, uuid, origin, overlay, effectUpdated] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.updateActiveEffectFromIdOnToken(
	//     effectId,
	//     uuid,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateActiveEffectFromNameOnTokenArr(...inAttributes: any[]): Promise<boolean | undefined> {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('updateActiveEffectFromNameOnTokenArr | inAttributes must be of type array');
	//   }
	//   const [effectName, uuid, origin, overlay, effectUpdated] = inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.updateActiveEffectFromNameOnToken(
	//     effectName,
	//     uuid,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async addActiveEffectOnActorArr(...inAttributes: any[]) {
	//   if (!Array.isArray(inAttributes)) {
	//     throw error('addActiveEffectOnActorArr | inAttributes must be of type array');
	//   }
	//   const [actorId, activeEffectData] = inAttributes;
	//   const result = (<EffectInterface>this.effectInterface)._effectHandler.addActiveEffectOnActor(
	//     <string>actorId,
	//     activeEffectData,
	//   );
	//   return result;
	// },

	// // ======================
	// // Effect Actor Management
	// // ======================

	// async addEffectOnActor(actorId: string, effectName: string, effect: Effect) {
	//   const result = await (<EffectInterface>this.effectInterface).addEffectOnActor(effectName, <string>actorId, effect);
	//   return result;
	// },

	// async findEffectByNameOnActor(actorId: string, effectName: string): Promise<ActiveEffect | null> {
	//   const result = await (<EffectInterface>this.effectInterface).findEffectByNameOnActor(effectName, <string>actorId);
	//   return result;
	// },

	// async hasEffectAppliedOnActor(actorId: string, effectName: string, includeDisabled: boolean) {
	//   const result = await (<EffectInterface>this.effectInterface).hasEffectAppliedOnActor(
	//     effectName,
	//     <string>actorId,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async hasEffectAppliedFromIdOnActor(actorId: string, effectId: string, includeDisabled: boolean) {
	//   const result = await (<EffectInterface>this.effectInterface).hasEffectAppliedFromIdOnActor(
	//     effectId,
	//     <string>actorId,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async toggleEffectFromIdOnActor(
	//   actorId: string,
	//   effectId: string,
	//   alwaysDelete: boolean,
	//   forceEnabled?: boolean,
	//   forceDisabled?: boolean,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).toggleEffectFromIdOnActor(
	//     effectId,
	//     <string>actorId,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//   );
	//   return result;
	// },

	// async addActiveEffectOnActor(actorId: string, activeEffectData: ActiveEffectData) {
	//   const result = (<EffectInterface>this.effectInterface).addActiveEffectOnActor(<string>actorId, activeEffectData);
	//   return result;
	// },

	// async removeEffectOnActor(actorId: string, effectName: string) {
	//   const result = await (<EffectInterface>this.effectInterface).removeEffectOnActor(effectName, <string>actorId);
	//   return result;
	// },

	// async removeEffectFromIdOnActor(actorId: string, effectId: string) {
	//   const result = await (<EffectInterface>this.effectInterface).removeEffectFromIdOnActor(effectId, <string>actorId);
	//   return result;
	// },

	// ======================
	// Effect Token Management
	// ======================

	// async addEffectOnToken(tokenId: string, effectName: string, effect: Effect) {
	//   const result = await (<EffectInterface>this.effectInterface).addEffectOnToken(effectName, <string>tokenId, effect);
	//   return result;
	// },

	// async findEffectByNameOnToken(tokenId: string, effectName: string): Promise<ActiveEffect | null> {
	//   const result = await (<EffectInterface>this.effectInterface).findEffectByNameOnToken(effectName, <string>tokenId);
	//   return result;
	// },

	// async hasEffectAppliedOnToken(tokenId: string, effectName: string, includeDisabled: boolean) {
	//   const result = await (<EffectInterface>this.effectInterface).hasEffectAppliedOnToken(
	//     effectName,
	//     <string>tokenId,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async hasEffectAppliedFromIdOnToken(tokenId: string, effectId: string, includeDisabled: boolean) {
	//   const result = await (<EffectInterface>this.effectInterface).hasEffectAppliedFromIdOnToken(
	//     effectId,
	//     <string>tokenId,
	//     includeDisabled,
	//   );
	//   return result;
	// },

	// async toggleEffectFromIdOnToken(
	//   tokenId: string,
	//   effectId: string,
	//   alwaysDelete: boolean,
	//   forceEnabled?: boolean,
	//   forceDisabled?: boolean,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).toggleEffectFromIdOnToken(
	//     effectId,
	//     <string>tokenId,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//   );
	//   return result;
	// },

	// async addActiveEffectOnToken(tokenId: string, activeEffectData: ActiveEffectData) {
	//   const result = await (<EffectInterface>this.effectInterface).addActiveEffectOnToken(
	//     <string>tokenId,
	//     activeEffectData,
	//   );
	//   return result;
	// },

	// async removeEffectOnToken(tokenId: string, effectName: string) {
	//   const result = await (<EffectInterface>this.effectInterface).removeEffectOnToken(effectName, <string>tokenId);
	//   return result;
	// },

	// async removeEffectFromIdOnToken(tokenId: string, effectId: string) {
	//   const result = await (<EffectInterface>this.effectInterface).removeEffectFromIdOnToken(effectId, <string>tokenId);
	//   return result;
	// },

	// async removeEffectFromIdOnTokenMultiple(tokenId: string, effectIds: string[]) {
	//   const result = await (<EffectInterface>this.effectInterface).removeEffectFromIdOnTokenMultiple(
	//     effectIds,
	//     <string>tokenId,
	//   );
	//   return result;
	// },

	// async updateEffectFromIdOnToken(tokenId: string, effectId: string, origin, overlay, effectUpdated: Effect) {
	//   const result = await (<EffectInterface>this.effectInterface).updateEffectFromIdOnToken(
	//     effectId,
	//     tokenId,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateEffectFromNameOnToken(tokenId: string, effectName: string, origin, overlay, effectUpdated: Effect) {
	//   const result = await (<EffectInterface>this.effectInterface).updateEffectFromNameOnToken(
	//     effectName,
	//     tokenId,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateActiveEffectFromIdOnToken(
	//   tokenId: string,
	//   effectId: string,
	//   origin,
	//   overlay,
	//   effectUpdated: ActiveEffectData,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).updateActiveEffectFromIdOnToken(
	//     effectId,
	//     tokenId,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async updateActiveEffectFromNameOnToken(
	//   tokenId: string,
	//   effectName: string,
	//   origin,
	//   overlay,
	//   effectUpdated: ActiveEffectData,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).updateActiveEffectFromNameOnToken(
	//     effectName,
	//     tokenId,
	//     origin,
	//     overlay,
	//     effectUpdated,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromEffectId(
	//   effectActions: EffectActions,
	//   owner: Actor | Item,
	//   effectId: string,
	//   alwaysDelete?: boolean,
	//   forceEnabled?: boolean,
	//   forceDisabled?: boolean,
	//   isTemporary?: boolean,
	//   isDisabled?: boolean,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).onManageActiveEffectFromEffectId(
	//     effectActions,
	//     owner,
	//     effectId,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromEffectIdArr(...inAttributes) {
	//   const [effectActions, owner, effectId, alwaysDelete, forceEnabled, forceDisabled, isTemporary, isDisabled] =
	//     inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.onManageActiveEffectFromEffectId(
	//     effectActions,
	//     owner,
	//     effectId,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromEffect(
	//   effectActions: EffectActions,
	//   owner: Actor | Item,
	//   effect: Effect,
	//   alwaysDelete?: boolean,
	//   forceEnabled?: boolean,
	//   forceDisabled?: boolean,
	//   isTemporary?: boolean,
	//   isDisabled?: boolean,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).onManageActiveEffectFromEffect(
	//     effectActions,
	//     owner,
	//     effect,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromEffectArr(...inAttributes) {
	//   const [effectActions, owner, effect, alwaysDelete, forceEnabled, forceDisabled, isTemporary, isDisabled] =
	//     inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.onManageActiveEffectFromEffect(
	//     effectActions,
	//     owner,
	//     effect,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromActiveEffect(
	//   effectActions: EffectActions,
	//   owner: Actor | Item,
	//   activeEffect: ActiveEffect | null | undefined,
	//   alwaysDelete?: boolean,
	//   forceEnabled?: boolean,
	//   forceDisabled?: boolean,
	//   isTemporary?: boolean,
	//   isDisabled?: boolean,
	// ) {
	//   const result = await (<EffectInterface>this.effectInterface).onManageActiveEffectFromActiveEffect(
	//     effectActions,
	//     owner,
	//     activeEffect,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// async onManageActiveEffectFromActiveEffectArr(...inAttributes) {
	//   const [effectActions, owner, activeEffect, alwaysDelete, forceEnabled, forceDisabled, isTemporary, isDisabled] =
	//     inAttributes;
	//   const result = await (<EffectInterface>this.effectInterface)._effectHandler.onManageActiveEffectFromActiveEffect(
	//     effectActions,
	//     owner,
	//     activeEffect,
	//     alwaysDelete,
	//     forceEnabled,
	//     forceDisabled,
	//     isTemporary,
	//     isDisabled,
	//   );
	//   return result;
	// },

	// =======================================================================================

	async cleanUpTokenSelected() {
		const tokens = <Token[]>canvas.tokens?.controlled;
		if (!tokens || tokens.length === 0) {
			warn(`No tokens are selected`, true);
			return;
		}
		for (const token of tokens) {
			if (token && token.document) {
				if (getProperty(token.document, `flags.${CONSTANTS.MODULE_NAME}`)) {
					const p = getProperty(token.document, `flags.${CONSTANTS.MODULE_NAME}`);
					for (const key in p) {
						const senseOrConditionIdKey = key;
						const senseOrConditionValue = <any>p[key];
						await token.document.unsetFlag(CONSTANTS.MODULE_NAME, senseOrConditionIdKey);
					}
					info(`Cleaned up token '${token.name}'`, true);
				}
				const items = <Item[]>token.actor?.items.contents;
				for (const item of items) {
					const p = getProperty(item, `flags.${CONSTANTS.MODULE_NAME}`);
					for (const key in p) {
						const senseOrConditionIdKey = key;
						const senseOrConditionValue = <any>p[key];
						await item.unsetFlag(CONSTANTS.MODULE_NAME, senseOrConditionIdKey);
					}
					info(`Cleaned up item '${item.name}'`, true);
				}
			} else {
				warn(`No token found on the canvas for id '${token.id}'`, true);
			}
		}
		for (const token of tokens) {
			if (token && token.actor) {
				if (getProperty(token.actor, `flags.${CONSTANTS.MODULE_NAME}`)) {
					const p = getProperty(token.actor, `flags.${CONSTANTS.MODULE_NAME}`);
					for (const key in p) {
						const senseOrConditionIdKey = key;
						const senseOrConditionValue = <any>p[key];
						await token.actor.unsetFlag(CONSTANTS.MODULE_NAME, senseOrConditionIdKey);
					}
					info(`Cleaned up actor '${token.name}'`, true);
				}
				const items = token.actor.items.contents;
				for (const item of items) {
					const p = getProperty(item, `flags.${CONSTANTS.MODULE_NAME}`);
					for (const key in p) {
						const senseOrConditionIdKey = key;
						const senseOrConditionValue = <any>p[key];
						await item.unsetFlag(CONSTANTS.MODULE_NAME, senseOrConditionIdKey);
					}
					info(`Cleaned up item '${item.name}'`, true);
				}
			} else {
				warn(`No token found on the canvas for id '${token.id}'`, true);
			}
		}
	},
};

export default API;