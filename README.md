# bootstrapAccordion-array
This is a fork from the [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) library where the accordion is specifically optimized to support arrays.

### Example code:
```html
<ngb-accordion [closeOthers]="true" activeIds="static-0">
	<ngb-panel id="static-{{i}}" title="{{array.title}}" *ngFor="let array of arrays;let i = index;">
		<ng-template ngbPanelContent>
			<div class="row"><div class="col">{{array.content}}</div></div>
		</ng-template>
	</ngb-panel>
</ngb-accordion>
```
**Please note:** The `ngb-accordion` `activeIds` must be set to `static-0` when you desire the function to close other tabs, because it will then trigger the first array object (0) to open. For similar reasons, the `ngb-panel` `id` must be set to `static-{{i}}`. It will get the index of the object and make each tab have an unique id even if you happen to have two arrays in the same accordion.



#### If you do happen to have two arrays in the same accordion, ####

make the second array's `id` be `static-{{i+n}}`, being `n` the number of tabs your previous array has plus one. *Because otherwise, the close others function won't work.* The accordion works with unique IDs to make a tab close or open. It is important that the dynamic content keeps it this way.
